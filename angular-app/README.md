# Angular PKCE application

This application uses OAuth 2.0 Authorization Code + PKCE with the Spring Authorization Server in `../authentication-server`.

## Run

```bash
cd angular-app
npm install
npm start
```

The app runs at `http://localhost:4200`.

## Authentication flow

1. `/dashboard` is protected by `authGuard`.
2. Unauthenticated users are redirected to `/login`.
3. Login starts Authorization Code + PKCE.
4. The browser is redirected to `http://localhost:6115/authentication-server/oauth2/authorize`.
5. The authentication server displays its Spring Security login page.
6. The authorization code is returned to `/auth/callback`.
7. Angular exchanges the code and PKCE verifier at `/oauth2/token`.
8. Access and refresh tokens are stored in `sessionStorage`.
9. The user is redirected to `/dashboard`.

The authentication server registers `pkceAppAuthenticationCode` with the redirect URI `http://localhost:4200/auth/callback` on startup.
