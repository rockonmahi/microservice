import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<main class="page"><p>{{ message }}</p></main>`,
  styles: [`.page { min-height: 100vh; display: grid; place-items: center; font-family: Arial, sans-serif; }`]
})
export class CallbackComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  message = 'Completing login...';

  async ngOnInit(): Promise<void> {
    const code = this.route.snapshot.queryParamMap.get('code');
    const state = this.route.snapshot.queryParamMap.get('state');
    const error = this.route.snapshot.queryParamMap.get('error');

    if (error) {
      this.message = `Login failed: ${error}`;
      this.auth.clearLocalSession();
      return;
    }

    if (!code || !state) {
      this.message = 'Invalid OAuth callback.';
      this.auth.clearLocalSession();
      return;
    }

    try {
      await this.auth.handleCallback(code, state);
      await this.router.navigateByUrl('/dashboard');
    } catch (e) {
      console.error(e);
      this.message = 'Login failed. Please try again.';
    }
  }
}
