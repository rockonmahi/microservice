import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <main class="page">
      <section class="card">
        <h1>Login</h1>
        <p>Sign in using the Authorization Server.</p>
        <button type="button" (click)="login()" [disabled]="loading">
          {{ loading ? 'Redirecting...' : 'Login' }}
        </button>
      </section>
    </main>
  `,
  styles: [`
    .page { min-height: 100vh; display: grid; place-items: center; font-family: Arial, sans-serif; }
    .card { width: 360px; padding: 32px; border: 1px solid #ddd; border-radius: 12px; }
    button { width: 100%; padding: 12px; cursor: pointer; }
  `]
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  loading = false;

  async login(): Promise<void> {
    this.loading = true;
    await this.auth.startLogin();
  }
}
