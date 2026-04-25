import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      this.authService.handleCallback(code);
    } else if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.authService.logout();
  }

  get name() {
    return this.authService.name;
  }

  get identityClaims() {
    return this.authService.identityClaims;
  }
}
