import { Component, OnInit, inject } from '@angular/core';
import { AuthPageLayoutComponent } from '../../../shared/layout/auth-page-layout/auth-page-layout.component';
import { SigninFormComponent } from '../../../shared/components/auth/signin-form/signin-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [AuthPageLayoutComponent, SigninFormComponent],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  async ngOnInit(): Promise<void> {
    const code = this.route.snapshot.queryParamMap.get('code');
    const state = this.route.snapshot.queryParamMap.get('state');
    const error = this.route.snapshot.queryParamMap.get('error');

    if (error) {
      console.error('OAuth error:', error);
      return;
    }

    if (code) {
      try {
        await this.authService.handleCallback(code, state || undefined);
      } catch (callbackError) {
        console.error('OAuth callback error:', callbackError);
      }
    } else if (this.authService.isAuthenticated()) {
      await this.router.navigate(['/']);
    }
  }
}
