export const AUTH_CONFIG = {
  issuer: 'http://localhost:6115/authentication-server',
  authorizationEndpoint: 'http://localhost:6115/authentication-server/oauth2/authorize',
  tokenEndpoint: 'http://localhost:6115/authentication-server/oauth2/token',
  logoutEndpoint: 'http://localhost:6115/authentication-server/connect/logout',
  clientId: 'pkceAppAuthenticationCode',
  redirectUri: 'http://localhost:4200/auth/callback',
  postLogoutRedirectUri: 'http://localhost:4200/',
  scope: 'openid profile email phone'
} as const;
