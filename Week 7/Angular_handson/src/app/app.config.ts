import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { taskReducer } from './store/task.reducer';
import { TaskEffects } from './store/task.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Standalone Routing Configuration
    provideRouter(routes, withComponentInputBinding()),
    // HttpClient configured with functional JWT interceptor
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    // NgRx Store Initialization
    provideStore({
      tasks: taskReducer
    }),
    // NgRx Effects Registration
    provideEffects([TaskEffects])
  ]
};
