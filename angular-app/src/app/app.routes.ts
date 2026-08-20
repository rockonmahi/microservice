import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { CallbackComponent } from './callback.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'auth/callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'dashboard' }
];
