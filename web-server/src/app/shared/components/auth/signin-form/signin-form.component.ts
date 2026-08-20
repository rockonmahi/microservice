import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin-form',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './signin-form.component.html',
  styles: ``
})
export class SigninFormComponent implements OnInit {
  private readonly authService = inject(AuthService);

  showPassword = false;
  isChecked = false;
  isLoading = false;
  errorMessage: string | null = null;

  name: string | null = null;
  identityClaims: Record<string, unknown> | null = null;

  username = '';
  password = '';

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  checkLoginStatus(): void {
    if (this.authService.isAuthenticated()) {
      this.name = this.authService.name;
      this.identityClaims = this.authService.identityClaims;
    }
  }

  async onFormSubmit(event: Event): Promise<void> {
    event.preventDefault();
    await this.onOAuthLogin();
  }

  async onOAuthLogin(): Promise<void> {
    this.errorMessage = null;
    this.isLoading = true;

    try {
      await this.authService.startPKCELogin();
    } catch (error: any) {
      console.error('OAuth login error:', error);
      this.errorMessage = error?.message || 'Unable to start login. Please try again.';
      this.isLoading = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
