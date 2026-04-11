import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:6115/authentication-server',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/callback',

  // URL of the SPA to redirect the user to after logout
  postLogoutRedirectUri: window.location.origin + '/',

  // Standard Spring Authorization Server OIDC logout endpoint
  logoutUrl: 'http://localhost:6115/authentication-server/logout',

  // Revocation endpoint
  revocationEndpoint: 'http://localhost:6115/authentication-server/oauth2/revoke',

  // Disable strict validation to allow custom logout URL overrides
  strictDiscoveryDocumentValidation: false,

  // The SPA's id. The SPA is registered with this id at the auth-server
  // matching 'eazypublicclient' in RegisteredClientServiceImpl.java
  clientId: 'authorizationCodeSelfContained',

  // Just needed if your auth server demands a secret. In general, this
  // is a bad idea for SPA, as the secret cannot be kept safe.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The logout confirmed scope is used for logging out
  scope: 'openid email phone',

  showDebugInformation: true,
};
