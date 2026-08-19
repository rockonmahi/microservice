import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin-form',
  imports: [
    CommonModule,
    LabelComponent,
    CheckboxComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent implements OnInit {
  private authService = inject(AuthService);

  showPassword = false;
  isChecked = false;
  isLoading = false;
  errorMessage: string | null = null;

  name: string | null = null;
  identityClaims: any = null;

  username = '';
  password = '';

  ngOnInit() {
    this.checkLoginStatus();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  checkLoginStatus() {
    if (this.authService.isAuthenticated()) {
      this.name = this.authService.name;
      this.identityClaims = this.authService.identityClaims;
    }
  }

  /**
   * Handle form submission - Authenticate with credentials and start PKCE flow
   */
  async onFormSubmit(event: Event) {
    event.preventDefault();
    this.errorMessage = null;
    this.isLoading = true;

    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      this.isLoading = false;
      return;
    }

    try {
      console.log('🔑 Form submission: Attempting to login');
      await this.authService.login(this.username, this.password);
      // If we get here, startPKCELogin() didn't redirect (error case)
      this.errorMessage = 'Login failed. Please try again.';
      this.isLoading = false;
    } catch (error: any) {
      console.error('❌ Form login error:', error);
      this.errorMessage = error.message || 'Login failed. Please try again.';
      this.isLoading = false;
    }
  }

  /**
   * Start OAuth PKCE flow directly (without credentials)
   */
  async onOAuthLogin() {
    this.errorMessage = null;
    this.isLoading = true;

    try {
      console.log('🔐 OAuth button clicked: Starting PKCE flow');
      await this.authService.startPKCELogin();
      // If we get here, the redirect didn't happen (error case)
      this.errorMessage = 'OAuth login failed. Please try again.';
      this.isLoading = false;
    } catch (error: any) {
      console.error('❌ OAuth login error:', error);
      this.errorMessage = error.message || 'OAuth login failed. Please try again.';
      this.isLoading = false;
    }
  }

  logout() {
    this.authService.logout();
  }
}
