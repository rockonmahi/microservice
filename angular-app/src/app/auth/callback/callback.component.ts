import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `
    <main class="auth-page">
      <section class="login-card">
        <h1>{{ message }}</h1>
        <p>Please wait while we complete your sign-in.</p>
      </section>
    </main>
  `
})
export class CallbackComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  message = 'Signing you in...';

  constructor() {
    void this.completeLogin();
  }

  private async completeLogin(): Promise<void> {
    const params = this.route.snapshot.queryParamMap;
    const error = params.get('error');
    const code = params.get('code');
    const state = params.get('state');

    if (error || !code || !state) {
      this.message = error ? `Login failed: ${error}` : 'Login failed: missing authorization response.';
      return;
    }

    try {
      await this.auth.handleCallback(code, state);
      await this.router.navigate(['/dashboard']);
    } catch (err) {
      console.error(err);
      this.message = 'Login failed. Please try again.';
    }
  }
}
