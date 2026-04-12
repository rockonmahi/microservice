package com.escola.authserver.service;

import com.escola.authserver.entity.RegisteredClients;
import com.escola.authserver.repository.RegisteredClientsRepository;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.security.oauth2.server.authorization.settings.OAuth2TokenFormat;
import org.springframework.security.oauth2.server.authorization.settings.TokenSettings;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class RegisteredClientServiceImpl implements RegisteredClientService {

    private final RegisteredClientsRepository registeredClientsRepository;

    @Override
    public void save(RegisteredClient registeredClient) {
        RegisteredClients existing = registeredClientsRepository.findByClientId(registeredClient.getClientId()).orElse(null);
        RegisteredClients toSave = convert(registeredClient);
        if (existing != null) {
            toSave.setCreatedAt(existing.getCreatedAt());
        } else {
            toSave.setCreatedAt(Instant.now());
        }
        registeredClientsRepository.save(toSave);
    }

    @Override
    public @Nullable RegisteredClient findById(String id) {
        return registeredClientsRepository.findById(id).map(this::convert).orElse(null);
    }

    @Override
    public @Nullable RegisteredClient findByClientId(String clientId) {
        return registeredClientsRepository.findByClientId(clientId)
                .map(this::convert)
                .orElseGet(() -> {
                    return null;
                });
    }
    public RegisteredClient convert(RegisteredClients source) {

        RegisteredClient.Builder builder =
                RegisteredClient.withId(source.getId())
                        .clientId(source.getClientId())
                        .clientName(source.getClientName());

        if (source.getClientIdIssuedAt() != null) {
            builder.clientIdIssuedAt(source.getClientIdIssuedAt());
        }

        if (source.getClientSecret() != null) {
            builder.clientSecret(source.getClientSecret());
        }

        if (source.getClientSecretExpiresAt() != null) {
            builder.clientSecretExpiresAt(source.getClientSecretExpiresAt());
        }

        source.getClientAuthenticationMethods()
                .forEach(v ->
                        builder.clientAuthenticationMethod(
                                new ClientAuthenticationMethod(v)));

        source.getAuthorizationGrantTypes()
                .forEach(v ->
                        builder.authorizationGrantType(
                                new AuthorizationGrantType(v)));

        builder.redirectUris(uris ->
                uris.addAll(source.getRedirectUris()));

        builder.postLogoutRedirectUris(uris ->
                uris.addAll(source.getPostLogoutRedirectUris()));

        builder.scopes(scopes ->
                scopes.addAll(source.getScopes()));

        builder.clientSettings(
                ClientSettings.builder()
                        .requireProofKey(source.isRequireProofKey())
                        .requireAuthorizationConsent(source.isRequireAuthorizationConsent())
                        .build()
        );

        TokenSettings.Builder tokenBuilder = TokenSettings.builder()
                .accessTokenTimeToLive(
                        Duration.ofSeconds(source.getAccessTokenTimeToLive()))
                .reuseRefreshTokens(source.isReuseRefreshTokens())
                .accessTokenFormat(
                        new OAuth2TokenFormat(source.getAccessTokenFormat()));

        if (source.getRefreshTokenTimeToLive() > 0) {
            tokenBuilder.refreshTokenTimeToLive(
                    Duration.ofSeconds(source.getRefreshTokenTimeToLive()));
        }

        builder.tokenSettings(tokenBuilder.build());

        return builder.build();
    }

    public RegisteredClients convert(RegisteredClient source) {

        return RegisteredClients.builder()
                .id(source.getId())
                .clientId(source.getClientId())
                .clientIdIssuedAt(source.getClientIdIssuedAt())
                .clientSecret(source.getClientSecret())
                .clientSecretExpiresAt(source.getClientSecretExpiresAt())
                .clientName(source.getClientName())

                .clientAuthenticationMethods(
                        source.getClientAuthenticationMethods()
                                .stream()
                                .map(ClientAuthenticationMethod::getValue)
                                .collect(Collectors.toSet())
                )

                .authorizationGrantTypes(
                        source.getAuthorizationGrantTypes()
                                .stream()
                                .map(AuthorizationGrantType::getValue)
                                .collect(Collectors.toSet())
                )

                .redirectUris(source.getRedirectUris())
                .postLogoutRedirectUris(source.getPostLogoutRedirectUris())
                .scopes(source.getScopes())

                .requireProofKey(
                        source.getClientSettings().isRequireProofKey())
                .requireAuthorizationConsent(
                        source.getClientSettings().isRequireAuthorizationConsent())

                .accessTokenTimeToLive(
                        source.getTokenSettings()
                                .getAccessTokenTimeToLive()
                                .getSeconds())

                .refreshTokenTimeToLive(
                        source.getTokenSettings().getRefreshTokenTimeToLive() != null
                                ? source.getTokenSettings()
                                .getRefreshTokenTimeToLive()
                                .getSeconds()
                                : 0)

                .reuseRefreshTokens(
                        source.getTokenSettings().isReuseRefreshTokens())

                .accessTokenFormat(
                        source.getTokenSettings()
                                .getAccessTokenFormat()
                                .getValue())

                .updatedAt(Instant.now())
                .build();
    }
}
