import { CanActivateFn } from '@angular/router';

/**
 * Functional Route Guard
 * 
 * Verifies if user has permission to access dashboard.
 * Currently simulates authentication verification, returning true.
 */
export const authGuard: CanActivateFn = (route, state) => {
  console.log('RouteGuard check: Access Granted');
  return true; 
};
