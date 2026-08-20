import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  id_token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly issuer = 'http://localhost:6115/authentication-server';
  private readonly clientId = 'pkceAppAuthenticationCode';
  private readonly redirectUri = `${window.location.origin}/auth/callback`;
  private readonly scope = 'openid profile';

  private readonly accessTokenKey = 'oauth_access_token';
  private readonly refreshTokenKey = 'oauth_refresh_token';
  private readonly expiresAtKey = 'oauth_expires_at';
  private readonly stateKey = 'oauth_state';
  private readonly verifierKey = 'oauth_code_verifier';

  async login(): Promise<void> {
    const verifier = this.randomString(64);
    const challenge = await this.createCodeChallenge(verifier);
    const state = this.randomString(32);

    sessionStorage.setItem(this.verifierKey, verifier);
    sessionStorage.setItem(this.stateKey, state);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: this.scope,
      state,
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    window.location.assign(`${this.issuer}/oauth2/authorize?${params.toString()}`);
  }

  async handleCallback(code: string, state: string): Promise<void> {
    const expectedState = sessionStorage.getItem(this.stateKey);
    const verifier = sessionStorage.getItem(this.verifierKey);

    if (!expectedState || state !== expectedState) {
      this.clearPkceState();
      throw new Error('Invalid OAuth2 state');
    }

    if (!verifier) {
      this.clearPkceState();
      throw new Error('PKCE verifier is missing');
    }

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', this.clientId)
      .set('redirect_uri', this.redirectUri)
      .set('code', code)
      .set('code_verifier', verifier);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const token = await firstValueFrom(
      this.http.post<TokenResponse>(`${this.issuer}/oauth2/token`, body.toString(), { headers })
    );

    this.storeTokens(token);
    this.clearPkceState();
  }

  async refresh(): Promise<boolean> {
    const refreshToken = sessionStorage.getItem(this.refreshTokenKey);
    if (!refreshToken) {
      return false;
    }

    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('client_id', this.clientId)
      .set('refresh_token', refreshToken);

    try {
      const token = await firstValueFrom(
        this.http.post<TokenResponse>(`${this.issuer}/oauth2/token`, body.toString(), {
          headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        })
      );
      this.storeTokens(token);
      return true;
    } catch {
      this.logout();
      return false;
    }
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem(this.accessTokenKey);
    const expiresAt = Number(sessionStorage.getItem(this.expiresAtKey) ?? '0');
    return !!token && expiresAt > Date.now() + 5000;
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem(this.accessTokenKey);
  }

  logout(): void {
    sessionStorage.removeItem(this.accessTokenKey);
    sessionStorage.removeItem(this.refreshTokenKey);
    sessionStorage.removeItem(this.expiresAtKey);
    this.clearPkceState();
    this.router.navigate(['/login']);
  }

  private storeTokens(token: TokenResponse): void {
    sessionStorage.setItem(this.accessTokenKey, token.access_token);
    if (token.refresh_token) {
      sessionStorage.setItem(this.refreshTokenKey, token.refresh_token);
    }
    if (token.expires_in) {
      sessionStorage.setItem(this.expiresAtKey, String(Date.now() + token.expires_in * 1000));
    } else {
      sessionStorage.removeItem(this.expiresAtKey);
    }
  }

  private clearPkceState(): void {
    sessionStorage.removeItem(this.stateKey);
    sessionStorage.removeItem(this.verifierKey);
  }

  private randomString(length: number): string {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  }

  private async createCodeChallenge(verifier: string): Promise<string> {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return this.base64UrlEncode(new Uint8Array(digest));
  }

  private base64UrlEncode(bytes: Uint8Array): string {
    let binary = '';
    bytes.forEach(byte => binary += String.fromCharCode(byte));
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}
