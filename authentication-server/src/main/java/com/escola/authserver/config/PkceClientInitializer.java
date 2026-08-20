package com.escola.authserver.config;

import com.escola.authserver.service.RegisteredClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.security.oauth2.server.authorization.settings.OAuth2TokenFormat;
import org.springframework.security.oauth2.server.authorization.settings.TokenSettings;

import java.time.Duration;
import java.util.UUID;

@Configuration
@RequiredArgsConstructor
public class PkceClientInitializer {

    private static final String CLIENT_ID = "pkceAppAuthenticationCode";
    private static final String REDIRECT_URI = "http://localhost:4200/auth/callback";

    private final RegisteredClientService registeredClientService;

    @Bean
    ApplicationRunner registerAngularPkceClient() {
        return args -> {
            RegisteredClient existing = registeredClientService.findByClientId(CLIENT_ID);
            String id = existing != null ? existing.getId() : UUID.randomUUID().toString();

            RegisteredClient client = RegisteredClient.withId(id)
                    .clientId(CLIENT_ID)
                    .clientName("Angular PKCE Application")
                    .clientAuthenticationMethod(ClientAuthenticationMethod.NONE)
                    .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                    .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
                    .redirectUri(REDIRECT_URI)
                    .postLogoutRedirectUri("http://localhost:4200/login")
                    .scope("openid")
                    .scope("profile")
                    .clientSettings(ClientSettings.builder()
                            .requireProofKey(true)
                            .requireAuthorizationConsent(false)
                            .build())
                    .tokenSettings(TokenSettings.builder()
                            .accessTokenTimeToLive(Duration.ofMinutes(30))
                            .refreshTokenTimeToLive(Duration.ofHours(8))
                            .reuseRefreshTokens(false)
                            .accessTokenFormat(OAuth2TokenFormat.SELF_CONTAINED)
                            .build())
                    .build();

            registeredClientService.save(client);
        };
    }
}
