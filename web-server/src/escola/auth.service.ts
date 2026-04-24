import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { generateCodeVerifier, generateCodeChallenge } from './pkce.utils';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private readonly AUTH_URL = 'http://localhost:6115/authentication-server/oauth2/authorize';
  private readonly TOKEN_URL = 'http://localhost:6115/authentication-server/oauth2/token';
  private readonly LOGOUT_URL = 'http://localhost:6115/authentication-server/logout';
  private readonly CLIENT_ID = 'authorizationCodeSelfContained';
  private readonly REDIRECT_URI = window.location.origin + '/callback';

  async login() {
    const verifier = await generateCodeVerifier();
    localStorage.setItem('code_verifier', verifier);

    const challenge = await generateCodeChallenge(verifier);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.CLIENT_ID,
      redirect_uri: this.REDIRECT_URI,
      scope: 'openid profile email phone',
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    window.location.href = `${this.AUTH_URL}?${params.toString()}`;
  }

  async handleCallback(code: string) {
    const verifier = localStorage.getItem('code_verifier');
    if (!verifier) throw new Error('No code_verifier found');

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.REDIRECT_URI)
      .set('client_id', this.CLIENT_ID)
      .set('code_verifier', verifier);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    try {
      const response: any = await firstValueFrom(this.http.post(this.TOKEN_URL, body.toString(), { headers }));
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('id_token', response.id_token);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Token exchange failed', error);
      this.router.navigate(['/']);
    } finally {
      localStorage.removeItem('code_verifier');
    }
  }

  logout() {
    const idToken = this.idToken;
    localStorage.clear();
    const logoutUrl = `${this.LOGOUT_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`;
    window.location.href = logoutUrl;
  }

  get accessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  get idToken(): string | null {
    return localStorage.getItem('id_token');
  }

  get identityClaims(): any {
    const token = this.idToken;
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      // Decode base64url
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')));
    } catch (e) {
      return null;
    }
  }

  get name(): string | null {
    const claims = this.identityClaims;
    return claims ? (claims.name || claims.sub) : null;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}
