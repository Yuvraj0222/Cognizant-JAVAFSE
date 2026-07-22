import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    // Lazy loaded standalone dashboard component
    loadComponent: () =>
      import('./components/task-dashboard/task-dashboard.component').then(
        (m) => m.TaskDashboardComponent
      ),
    // Route guard protecting dashboard context
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
