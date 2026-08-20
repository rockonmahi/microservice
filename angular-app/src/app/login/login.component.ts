import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <main class="auth-page">
      <section class="login-card">
        <div class="brand">MICROSERVICES</div>
        <h1>Welcome back</h1>
        <p>Sign in to continue to your dashboard.</p>
        <button type="button" (click)="login()" [disabled]="loading">
          {{ loading ? 'Redirecting...' : 'Login' }}
        </button>
        <small>Secure sign-in powered by OAuth 2.0 + PKCE</small>
      </section>
    </main>
  `
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  loading = false;

  async login(): Promise<void> {
    this.loading = true;
    try {
      await this.auth.login();
    } catch {
      this.loading = false;
    }
  }
}
