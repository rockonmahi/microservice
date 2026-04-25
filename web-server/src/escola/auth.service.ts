import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private oauthService = inject(OAuthService);
  private router = inject(Router);

  constructor() {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        // Already logged in, maybe redirect if on callback
        if (window.location.pathname === '/callback') {
            this.router.navigate(['/dashboard']);
        }
      }
    });
  }

  async login() {
    this.oauthService.initCodeFlow();
  }

  async handleCallback(code: string) {
    // angular-oauth2-oidc handles this automatically in loadDiscoveryDocumentAndTryLogin
    // but if we want to manually trigger it:
    await this.oauthService.loadDiscoveryDocumentAndTryLogin();
    if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.oauthService.logOut();
  }

  get accessToken(): string | null {
    return this.oauthService.getAccessToken();
  }

  get idToken(): string | null {
    return this.oauthService.getIdToken();
  }

  get scopes(): string[] {
    const token = this.accessToken;
    if (!token) return [];
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.scope) {
        return typeof payload.scope === 'string' ? payload.scope.split(' ') : payload.scope;
      }
    } catch (e) {
      console.error('Failed to decode access token for scopes', e);
    }
    return [];
  }

  get identityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }

  get name(): string | null {
    const claims = this.identityClaims;
    if (!claims) return null;
    return claims.name || claims.preferred_username || claims.sub || null;
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
