import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth.config';

interface JwtPayload {
  exp?: number;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly accessTokenKey = 'pkce_access_token';
  private readonly idTokenKey = 'pkce_id_token';
  private readonly refreshTokenKey = 'pkce_refresh_token';
  private readonly verifierKey = 'pkce_code_verifier';
  private readonly stateKey = 'pkce_state';

  async startLogin(): Promise<void> {
    const verifier = this.randomString(64);
    const challenge = await this.createCodeChallenge(verifier);
    const state = this.randomString(32);

    sessionStorage.setItem(this.verifierKey, verifier);
    sessionStorage.setItem(this.stateKey, state);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: AUTH_CONFIG.clientId,
      redirect_uri: AUTH_CONFIG.redirectUri,
      scope: AUTH_CONFIG.scope,
      state,
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    window.location.assign(`${AUTH_CONFIG.authorizationEndpoint}?${params.toString()}`);
  }

  async handleCallback(code: string, state: string): Promise<void> {
    const expectedState = sessionStorage.getItem(this.stateKey);
    const verifier = sessionStorage.getItem(this.verifierKey);

    if (!expectedState || expectedState !== state) {
      this.clearLocalSession();
      throw new Error('Invalid OAuth state');
    }

    if (!verifier) {
      this.clearLocalSession();
      throw new Error('Missing PKCE code verifier');
    }

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: AUTH_CONFIG.clientId,
      redirect_uri: AUTH_CONFIG.redirectUri,
      code,
      code_verifier: verifier
    });

    const response = await fetch(AUTH_CONFIG.tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });

    if (!response.ok) {
      this.clearLocalSession();
      throw new Error(`Token endpoint returned ${response.status}`);
    }

    const tokens = await response.json();
    sessionStorage.setItem(this.accessTokenKey, tokens.access_token);

    if (tokens.id_token) {
      sessionStorage.setItem(this.idTokenKey, tokens.id_token);
    }

    if (tokens.refresh_token) {
      sessionStorage.setItem(this.refreshTokenKey, tokens.refresh_token);
    }

    sessionStorage.removeItem(this.verifierKey);
    sessionStorage.removeItem(this.stateKey);
  }

  isAuthenticated(): boolean {
    const token = this.accessToken();
    if (!token) {
      return false;
    }

    const payload = this.decodeJwt(token);
    if (!payload?.exp) {
      return true;
    }

    return payload.exp * 1000 > Date.now();
  }

  accessToken(): string | null {
    return sessionStorage.getItem(this.accessTokenKey);
  }

  logout(): void {
    const idToken = sessionStorage.getItem(this.idTokenKey);
    const state = this.randomString(32);

    const params = new URLSearchParams({
      client_id: AUTH_CONFIG.clientId,
      post_logout_redirect_uri: AUTH_CONFIG.postLogoutRedirectUri,
      state
    });

    if (idToken) {
      params.set('id_token_hint', idToken);
    }

    this.clearLocalSession();

    // Browser navigation is intentional. It sends the Authorization Server's
    // JSESSIONID so Spring Security can invalidate the server-side login session.
    window.location.assign(`${AUTH_CONFIG.logoutEndpoint}?${params.toString()}`);
  }

  clearLocalSession(): void {
    sessionStorage.removeItem(this.accessTokenKey);
    sessionStorage.removeItem(this.idTokenKey);
    sessionStorage.removeItem(this.refreshTokenKey);
    sessionStorage.removeItem(this.verifierKey);
    sessionStorage.removeItem(this.stateKey);
  }

  private async createCodeChallenge(verifier: string): Promise<string> {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return this.base64Url(new Uint8Array(digest));
  }

  private randomString(length: number): string {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return this.base64Url(bytes).substring(0, length);
  }

  private base64Url(bytes: Uint8Array): string {
    let binary = '';
    bytes.forEach((byte) => binary += String.fromCharCode(byte));
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }

  private decodeJwt(token: string): JwtPayload | null {
    try {
      const payload = token.split('.')[1];
      const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decoded = decodeURIComponent(
        atob(normalized)
          .split('')
          .map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`)
          .join('')
      );
      return JSON.parse(decoded) as JwtPayload;
    } catch {
      return null;
    }
  }
}
