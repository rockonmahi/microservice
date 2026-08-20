import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
  id_token?: string;
}

interface StoredTokens extends TokenResponse {
  expires_at: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authorizationServer = 'http://localhost:6115/authentication-server';
  private readonly clientId = 'pkceAngularAuthenticationCode';
  private readonly redirectUri = `${window.location.origin}/signin`;
  private readonly tokenStorageKey = 'oauth_tokens';
  private readonly verifierStorageKey = 'oauth_code_verifier';
  private readonly stateStorageKey = 'oauth_state';

  constructor(private readonly router: Router) {}

  async startPKCELogin(): Promise<void> {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    const state = crypto.randomUUID();

    sessionStorage.setItem(this.verifierStorageKey, codeVerifier);
    sessionStorage.setItem(this.stateStorageKey, state);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: 'openid email phone',
      state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256'
    });

    window.location.assign(`${this.authorizationServer}/oauth2/authorize?${params.toString()}`);
  }

  async login(_username: string, _password: string): Promise<void> {
    // Credentials must be entered on the authorization server's login page.
    // Keeping passwords out of the SPA prevents the application from becoming a password client.
    await this.startPKCELogin();
  }

  async handleCallback(code: string, state?: string): Promise<void> {
    const expectedState = sessionStorage.getItem(this.stateStorageKey);
    const codeVerifier = sessionStorage.getItem(this.verifierStorageKey);

    sessionStorage.removeItem(this.stateStorageKey);
    sessionStorage.removeItem(this.verifierStorageKey);

    if (!expectedState || !state || state !== expectedState) {
      throw new Error('Invalid OAuth state. Please try signing in again.');
    }

    if (!codeVerifier) {
      throw new Error('PKCE code verifier is missing. Please try signing in again.');
    }

    const response = await fetch(`${this.authorizationServer}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: this.clientId,
        code,
        redirect_uri: this.redirectUri,
        code_verifier: codeVerifier
      })
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Token exchange failed (${response.status}): ${body || response.statusText}`);
    }

    const tokens = (await response.json()) as TokenResponse;
    localStorage.setItem(this.tokenStorageKey, JSON.stringify({
      ...tokens,
      expires_at: Date.now() + (tokens.expires_in * 1000)
    } satisfies StoredTokens));

    await this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    const tokens = this.getStoredTokens();
    return !!tokens?.access_token && tokens.expires_at > Date.now();
  }

  get accessToken(): string | null {
    return this.getStoredTokens()?.access_token ?? null;
  }

  get identityClaims(): Record<string, unknown> | null {
    const tokens = this.getStoredTokens();
    if (!tokens?.id_token) {
      return null;
    }

    try {
      const payload = tokens.id_token.split('.')[1];
      return JSON.parse(this.base64UrlDecode(payload)) as Record<string, unknown>;
    } catch {
      return null;
    }
  }

  get name(): string | null {
    const claims = this.identityClaims;
    return (claims?.['name'] as string) ?? (claims?.['preferred_username'] as string) ?? null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenStorageKey);
    sessionStorage.removeItem(this.stateStorageKey);
    sessionStorage.removeItem(this.verifierStorageKey);
    void this.router.navigate(['/signin']);
  }

  private getStoredTokens(): StoredTokens | null {
    const value = localStorage.getItem(this.tokenStorageKey);
    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as StoredTokens;
    } catch {
      localStorage.removeItem(this.tokenStorageKey);
      return null;
    }
  }

  private generateCodeVerifier(): string {
    const bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    return this.base64UrlEncode(bytes);
  }

  private async generateCodeChallenge(verifier: string): Promise<string> {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return this.base64UrlEncode(new Uint8Array(digest));
  }

  private base64UrlEncode(data: Uint8Array): string {
    let binary = '';
    data.forEach(byte => binary += String.fromCharCode(byte));
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  private base64UrlDecode(value: string): string {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(
      Array.from(atob(normalized), char => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`).join('')
    );
  }
}
