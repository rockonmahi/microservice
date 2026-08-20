import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <main class="page">
      <section class="card">
        <h1>Dashboard</h1>
        <p>You are authenticated with an Authorization Code + PKCE flow.</p>
        <p>The access token is self-contained (JWT).</p>
        <button type="button" (click)="logout()">Logout</button>
      </section>
    </main>
  `,
  styles: [`
    .page { min-height: 100vh; display: grid; place-items: center; font-family: Arial, sans-serif; }
    .card { width: 520px; padding: 32px; border: 1px solid #ddd; border-radius: 12px; }
    button { padding: 12px 24px; cursor: pointer; }
  `]
})
export class DashboardComponent {
  private readonly auth = inject(AuthService);

  logout(): void {
    this.auth.logout();
  }
}
