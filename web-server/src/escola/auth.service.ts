import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService, private router: Router) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
         // If we are on the callback page, redirect to home
         if (window.location.pathname.includes('/callback')) {
           this.router.navigate(['/']);
         }
      }
    });
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    const idToken = this.oauthService.getIdToken();
    const logoutUrl = `http://localhost:6115/authentication-server/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`;

    // Clear local tokens and session
    this.oauthService.logOut(true);

    // Manually redirect to the correct logout endpoint
    window.location.href = logoutUrl;
  }

  public get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get name() {
    const claims: any = this.identityClaims;
    if (!claims) return null;
    return claims['name'] || claims['sub'];
  }

  public isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
  }

  public get accessToken() {
    return this.oauthService.getAccessToken();
  }
}
