package com.escola.authserver.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Details for registering a new OAuth2/OIDC client")
public class ClientRegistrationDto {

    @Schema(description = "The unique client ID", example = "my-awesome-client")
    private String clientId;
    
    @Schema(description = "The client secret (will be encoded)", example = "secret123")
    private String clientSecret;
    
    @Schema(description = "A friendly name for the client", example = "My Mobile App")
    private String clientName;
    
    @Schema(description = "Set of allowed authentication methods", example = "[\"client_secret_basic\", \"client_secret_post\"]")
    private Set<String> clientAuthenticationMethods;
    
    @Schema(description = "Set of allowed authorization grant types", example = "[\"authorization_code\", \"refresh_token\"]")
    private Set<String> authorizationGrantTypes;
    
    @Schema(description = "Allowed redirect URIs", example = "[\"http://localhost:4200/callback\"]")
    private Set<String> redirectUris;
    
    @Schema(description = "Allowed post-logout redirect URIs", example = "[\"http://localhost:4200/\"]")
    private Set<String> postLogoutRedirectUris;
    
    @Schema(description = "Requested scopes", example = "[\"openid\", \"profile\", \"email\"]")
    private Set<String> scopes;

    @Builder.Default
    @Schema(description = "Whether PKCE is required", defaultValue = "false")
    private boolean requireProofKey = false;
    
    @Builder.Default
    @Schema(description = "Whether authorization consent is required", defaultValue = "false")
    private boolean requireAuthorizationConsent = false;
    
    @Builder.Default
    @Schema(description = "Access token TTL in seconds", defaultValue = "3600")
    private long accessTokenTimeToLive = 3600; // 1 hour
    
    @Builder.Default
    @Schema(description = "Refresh token TTL in seconds", defaultValue = "86400")
    private long refreshTokenTimeToLive = 86400; // 1 day
    
    @Builder.Default
    @Schema(description = "Whether to reuse refresh tokens", defaultValue = "true")
    private boolean reuseRefreshTokens = true;
    
    @Builder.Default
    @Schema(description = "Format of the access token", example = "self-contained", defaultValue = "self-contained")
    private String accessTokenFormat = "self-contained";
}
