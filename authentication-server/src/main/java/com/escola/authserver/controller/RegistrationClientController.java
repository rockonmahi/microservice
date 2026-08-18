package com.escola.authserver.controller;

import com.escola.authserver.api.RegistrationClientApi;
import com.escola.authserver.dto.ClientRegistrationDto;
import com.escola.authserver.service.RegisteredClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.security.oauth2.server.authorization.settings.OAuth2TokenFormat;
import org.springframework.security.oauth2.server.authorization.settings.TokenSettings;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/register/client")
public class RegistrationClientController implements RegistrationClientApi {

    private final RegisteredClientService registeredClientService;
    private final PasswordEncoder passwordEncoder;

    RegistrationClientController(RegisteredClientService registeredClientService, PasswordEncoder passwordEncoder) {
        this.registeredClientService = registeredClientService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ResponseEntity<String> registerClient(ClientRegistrationDto clientDto) {

        RegisteredClient.Builder builder = RegisteredClient.withId(UUID.randomUUID().toString())
                .clientId(clientDto.getClientId())
                .clientSecret(clientDto.getClientSecret()!=null?passwordEncoder.encode(clientDto.getClientSecret()):null)
                .clientName(clientDto.getClientName());

        if (clientDto.getClientAuthenticationMethods() != null) {
            builder.clientAuthenticationMethods(methods ->
                    methods.addAll(clientDto.getClientAuthenticationMethods().stream()
                            .map(ClientAuthenticationMethod::new)
                            .collect(Collectors.toSet())));
        }

        if (clientDto.getAuthorizationGrantTypes() != null) {
            builder.authorizationGrantTypes(grants ->
                    grants.addAll(clientDto.getAuthorizationGrantTypes().stream()
                            .map(AuthorizationGrantType::new)
                            .collect(Collectors.toSet())));
        }

        if (clientDto.getRedirectUris() != null) {
            builder.redirectUris(uris -> uris.addAll(clientDto.getRedirectUris()));
        }

        if (clientDto.getPostLogoutRedirectUris() != null) {
            builder.postLogoutRedirectUris(uris -> uris.addAll(clientDto.getPostLogoutRedirectUris()));
        }

        if (clientDto.getScopes() != null) {
            builder.scopes(scopes -> scopes.addAll(clientDto.getScopes()));
        }

        RegisteredClient registeredClient = builder
                .clientSettings(ClientSettings.builder()
                        .requireProofKey(clientDto.isRequireProofKey())
                        .requireAuthorizationConsent(clientDto.isRequireAuthorizationConsent())
                        .build())
                .tokenSettings(TokenSettings.builder()
                        .accessTokenTimeToLive(Duration.ofSeconds(clientDto.getAccessTokenTimeToLive()))
                        .refreshTokenTimeToLive(Duration.ofSeconds(clientDto.getRefreshTokenTimeToLive()))
                        .reuseRefreshTokens(clientDto.isReuseRefreshTokens())
                        .accessTokenFormat(new OAuth2TokenFormat(clientDto.getAccessTokenFormat()))
                        .build())
                .build();

        registeredClientService.save(registeredClient);
        return ResponseEntity.status(HttpStatus.CREATED).body("Client registered successfully");
    }

    @Override
    public ResponseEntity<String> registerAuthorizationCodeClient(ClientRegistrationDto clientDto) {
        clientDto.setAuthorizationGrantTypes(java.util.Set.of(AuthorizationGrantType.AUTHORIZATION_CODE.getValue(),
                                                              AuthorizationGrantType.REFRESH_TOKEN.getValue()));
        clientDto.setClientAuthenticationMethods(java.util.Set.of(ClientAuthenticationMethod.CLIENT_SECRET_POST.getValue(),
                                                                  ClientAuthenticationMethod.CLIENT_SECRET_BASIC.getValue()));
        return registerClient(clientDto);
    }

    @Override
    public ResponseEntity<String> registerPkceClient(ClientRegistrationDto clientDto) {
        clientDto.setAuthorizationGrantTypes(java.util.Set.of(AuthorizationGrantType.AUTHORIZATION_CODE.getValue()));
        clientDto.setClientAuthenticationMethods(java.util.Set.of(ClientAuthenticationMethod.NONE.getValue(),
                                                                  ClientAuthenticationMethod.CLIENT_SECRET_POST.getValue()));
        clientDto.setRequireProofKey(true);
        return registerClient(clientDto);
    }

    @Override
    public ResponseEntity<String> registerClientCredentialsClient(ClientRegistrationDto clientDto) {
        clientDto.setAuthorizationGrantTypes(java.util.Set.of(AuthorizationGrantType.CLIENT_CREDENTIALS.getValue()));
        clientDto.setClientAuthenticationMethods(java.util.Set.of(ClientAuthenticationMethod.CLIENT_SECRET_BASIC.getValue()));
        return registerClient(clientDto);
    }

    @Override
    public ResponseEntity<String> registerPasswordClient(ClientRegistrationDto clientDto) {
        clientDto.setAuthorizationGrantTypes(java.util.Set.of(AuthorizationGrantType.PASSWORD.getValue(),
                                                              AuthorizationGrantType.REFRESH_TOKEN.getValue()));
        clientDto.setClientAuthenticationMethods(java.util.Set.of(ClientAuthenticationMethod.CLIENT_SECRET_BASIC.getValue()));
        return registerClient(clientDto);
    }

    @Override
    public ResponseEntity<String> registerDeviceCodeClient(ClientRegistrationDto clientDto) {
        clientDto.setAuthorizationGrantTypes(java.util.Set.of(AuthorizationGrantType.DEVICE_CODE.getValue(),
                                                              AuthorizationGrantType.REFRESH_TOKEN.getValue()));
        clientDto.setClientAuthenticationMethods(java.util.Set.of(ClientAuthenticationMethod.NONE.getValue()));
        return registerClient(clientDto);
    }
}
