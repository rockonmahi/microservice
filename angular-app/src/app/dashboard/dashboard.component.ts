import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <main class="dashboard">
      <header class="topbar">
        <div>
          <span class="eyebrow">MICROSERVICES</span>
          <h1>Dashboard</h1>
        </div>
        <button type="button" class="logout" (click)="logout()">Logout</button>
      </header>

      <section class="welcome-card">
        <h2>You are authenticated</h2>
        <p>Your Angular application received an OAuth2 access token using Authorization Code + PKCE.</p>
        <div class="status">Authenticated</div>
      </section>
    </main>
  `
})
export class DashboardComponent {
  private readonly auth = inject(AuthService);

  logout(): void {
    this.auth.logout();
  }
}
