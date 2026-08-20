# Angular Authorization Code + PKCE

This SPA uses the public OAuth client `pkceAppAuthenticationCode` against:

`http://localhost:6115/authentication-server`

## Flow

1. Angular creates a `code_verifier`, SHA-256 `code_challenge`, and `state`.
2. The browser is redirected to `/oauth2/authorize`.
3. Spring Security authenticates the user with the normal `/login` page.
4. The authorization server returns an authorization code to `/auth/callback`.
5. Angular exchanges the code and `code_verifier` at `/oauth2/token`.
6. The authorization server issues a self-contained JWT access token.
7. Dashboard routes are protected by `authGuard`.
8. Logout redirects the browser to `/connect/logout` with `id_token_hint` and `post_logout_redirect_uri`.

## Required client registration

The registered client must have:

- client id: `pkceAppAuthenticationCode`
- client authentication method: `none`
- authorization grant: `authorization_code`
- PKCE required: `true`
- redirect URI: `http://localhost:4200/auth/callback`
- post logout redirect URI: `http://localhost:4200/`
- scopes: `openid`, `profile`, `email`, `phone`
- access token format: `self-contained`

The existing authentication server exposes the client registration API under `/register/client`. Register the PKCE client with a payload equivalent to:

```json
{
  "clientId": "pkceAppAuthenticationCode",
  "clientSecret": null,
  "clientName": "Angular PKCE",
  "clientAuthenticationMethods": ["none"],
  "authorizationGrantTypes": ["authorization_code"],
  "redirectUris": ["http://localhost:4200/auth/callback"],
  "postLogoutRedirectUris": ["http://localhost:4200/"],
  "scopes": ["openid", "profile", "email", "phone"],
  "requireProofKey": true,
  "requireAuthorizationConsent": false,
  "accessTokenTimeToLive": 3600,
  "refreshTokenTimeToLive": 0,
  "reuseRefreshTokens": false,
  "accessTokenFormat": "self-contained"
}
```

Do not send a client secret for the Angular public client.

## Run

```bash
npm install
npm start
```

The app runs at `http://localhost:4200`.
