import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Functional HTTP Interceptor
 * 
 * Intercepts outgoing HTTP requests and injects a mock JWT Authorization header token.
 * Demonstrates intermediate middleware configurations inside Angular standalone structure.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Interceptor: Appending Authorization Token Header');
  
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-jwt-token-12345'
    }
  });

  return next(authReq);
};
