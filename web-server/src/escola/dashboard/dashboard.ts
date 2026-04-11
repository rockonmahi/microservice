import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  constructor(public authService: AuthService) {}

  get claims() {
    return this.authService.identityClaims;
  }

  get name() {
    return this.authService.name;
  }

  get accessToken() {
    return this.authService.accessToken;
  }

  logout() {
    this.authService.logout();
  }
}
