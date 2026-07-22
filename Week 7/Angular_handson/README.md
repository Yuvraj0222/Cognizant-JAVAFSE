# Cognizant Digital Nurture Training: Angular Standalone & NgRx Hands-on Lab

This document serves as the official, comprehensive lab manual and tutorial for the **Angular Standalone Enterprise Dashboard (`angular-handson`)**. It is designed to train developers in Angular standalone architecture, RxJS asynchronous streams, NgRx state management pipelines, functional HttpInterceptors, route guards, and unit testing practices matching Cognizant global delivery standards.

---

## 1. Objective Explanation

### Why Standalone Architecture & State Management Exist
In early versions of Angular, components had to be declared in `NgModule` modules. This introduced verbosity and complex imports. **Angular Standalone Components** (introduced in Angular 14/15) remove the need for `NgModules`. A standalone component declares its own imports directly, simplifying the codebase and enabling faster boot times.
In complex web applications, managing state across multiple sibling components using standard events (`@Input`/`@Output`) becomes error-prone. **NgRx** (Redux pattern for Angular) introduces a single source of truth (the Store) that manages immutable state. Components dispatch Actions, which are handled by Reducers (to update state) or Effects (to handle side effects like API requests).

### Real Industry Examples
* **Enterprise ERP Dashboards**: Consolidate multiple widgets, data grids, and filters syncing with a centralized store (e.g., banking systems or HR portals).
* **Asynchronous Sync Ledgers**: Live dashboards pulling task lists while appending custom Auth tokens to all HTTP calls.

### Interview Relevance
Knowing how to boot Standalone applications, register lazy routes using guard functions, pipeline HttpClient operations using RxJS pipe operators, write NgRx reducers/selectors/effects, and test these modules using mock configurations is highly valued in senior developer interviews.

---

## 2. Project Architecture Diagram

The application implements a uni-directional data flow using standalone components and NgRx:

```text
       [ TaskDashboard Standalone Component ]
          │                          ▲
          │ (Dispatch Action)        │ (Select State)
          ▼                          │
      [ NgRx Store ] ◄───────── [ Selectors ]
          │
          ├───────── (If Sync Action) ─────────> [ Reducer ] ──> Updates State
          │
          ▼ (If Async Action)
     [ TaskEffects ]
          │
          ├──> [ TaskService (DI Singleton) ] ──> [ AuthInterceptor (JWT Header) ]
          │                                                    │
          │                                                    ▼ (HTTP POST/GET)
          │                                           [ Remote JSON API ]
          ▼ (Dispatch Success/Failure Action)
     [ NgRx Store ] ──> Updates State
```

---

## 3. Folder Structure Hierarchy

```text
angular-handson/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── app/
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.css
        ├── app.config.ts
        ├── app.routes.ts
        ├── components/
        │   └── task-dashboard/
        │       ├── task-dashboard.component.ts
        │       ├── task-dashboard.component.html
        │       ├── task-dashboard.component.css
        │       └── task-dashboard.component.spec.ts
        ├── guards/
        │   └── auth.guard.ts
        ├── interceptors/
        │   └── auth.interceptor.ts
        ├── models/
        │   └── task.model.ts
        ├── services/
        │   ├── task.service.ts
        │   └── task.service.spec.ts
        └── store/
            ├── task.actions.ts
            ├── task.reducer.ts
            ├── task.selectors.ts
            └── task.effects.ts
```

---

## 4. Angular CLI Commands

To create this project and its components using the Angular CLI, run these commands:
```bash
# 1. Create a new standalone workspace (rejecting NgModule templates)
ng new angular-handson --standalone --routing --style=css

# 2. Generate models configuration folder
mkdir src/app/models
touch src/app/models/task.model.ts

# 3. Generate Auth guard
ng generate guard guards/auth --flat

# 4. Generate Auth interceptor
ng generate interceptor interceptors/auth --flat

# 5. Generate Task service
ng generate service services/task --flat

# 6. Generate NgRx store structure
mkdir src/app/store
touch src/app/store/task.actions.ts
touch src/app/store/task.reducer.ts
touch src/app/store/task.selectors.ts
touch src/app/store/task.effects.ts

# 7. Generate dashboard standalone component
ng generate component components/task-dashboard --standalone
```

---

## 5. Installation Commands

Run the following command inside the project directory to install the required dependencies (including Angular packages and NgRx):
```bash
npm install @ngrx/store@18.0.0 @ngrx/effects@18.0.0 @ngrx/store-devtools@18.0.0 rxjs tslib zone.js
```

---

## 6. Step-by-Step Implementation

### Task A: Data Models configuration
* **Purpose**: Define structured typings for tasks and filter contexts.
* **Implementation File**: [task.model.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/models/task.model.ts)
* **Interview context**: Interfaces are compile-time validation markers in TypeScript that generate no compiled JavaScript footprint, saving memory.

### Task B: Route Guard protection
* **Purpose**: Restrict access to secure routes.
* **Implementation File**: [auth.guard.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/guards/auth.guard.ts)
* **Execution**: Angular executes route guards during navigation checks. If the guard returns `true`, navigation completes; otherwise, it is blocked or redirected.

### Task C: Functional HttpClient Interceptor
* **Purpose**: Add custom authorization headers to all outgoing requests.
* **Implementation File**: [auth.interceptor.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/interceptors/auth.interceptor.ts)
* **Execution**: Interceptors act as middleware for HTTP calls, intercepting and cloning requests to safely mutate headers before dispatching them.

### Task D: Singleton Service with RxJS piping
* **Purpose**: Fetch mock JSON todo items and POST new items using standard HTTP pipelines.
* **Implementation File**: [task.service.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/services/task.service.ts)
* **RxJS details**: Pipes operators (`retry`, `map`, `catchError`) to process data and handle failures gracefully.

### Task E: NgRx State Store implementation
* **Purpose**: Declare actions, initial states, reducers, selectors, and side effects.
* **Implementation Files**:
  * Actions: [task.actions.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/store/task.actions.ts)
  * Reducer: [task.reducer.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/store/task.reducer.ts)
  * Selectors: [task.selectors.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/store/task.selectors.ts)
  * Effects: [task.effects.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/store/task.effects.ts)

### Task F: Standalone UI Dashboard Component
* **Purpose**: Bind reactive inputs, select task observables, and dispatch add/toggle actions.
* **Implementation Files**: [task-dashboard.component.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/components/task-dashboard/task-dashboard.component.ts) & [task-dashboard.component.html](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/components/task-dashboard/task-dashboard.component.html)

---

## 7. Deep Dive: Key Concepts

### A. Routing & Lazy Loading
Our [app.routes.ts](file:///c:/Users/Hp/OneDrive/Desktop/yuvraj/angular_handson/src/app/app.routes.ts) file utilizes lazy loading via the `loadComponent` syntax:
```typescript
loadComponent: () => import('./components/task-dashboard/task-dashboard.component').then(m => m.TaskDashboardComponent)
```
This tells the Angular compiler to split `TaskDashboardComponent` into a separate chunk. The browser only downloads this chunk when the user navigates to `/dashboard`, optimizing initial page load times.

### B. Dependency Injection (DI) & Services
In Angular, services configured with `@Injectable({ providedIn: 'root' })` are singleton instances. The Angular Dependency Injection framework creates a single instance of the service when the application starts and shares it with any component or class that requests it.

### C. RxJS Principles
Observables represent a stream of asynchronous events.
* **Observable**: The producer of events (e.g., `HttpClient.get()`).
* **Observer**: The consumer of events (contains `next`, `error`, and `complete` callbacks).
* **Subscription**: The connection that starts the observable execution.
* **`pipe()`**: A utility to chain RxJS operators.
* **Operators**:
  * `map()`: Transforms the items emitted by an Observable.
  * `retry()`: Re-subscribes to a failed Observable a specified number of times.
  * `catchError()`: Intercepts failures on the stream and returns a fallback Observable.

### D. NgRx State Pipeline
* **Actions**: Describe events that occur (e.g., "Add Task").
* **Reducers**: Pure functions that take the current state and an action to return a new state.
* **Selectors**: Pure functions used to select, slice, and filter state from the store.
* **Effects**: Listen for actions, perform side-effects (like calling services), and dispatch new actions.

---

## 8. Expected Outputs & Verification

1. **Dashboard Interface**: Displays a styled header banner and a split two-column layout. The left column contains the "Create New Task" form. The right column displays the "Task Ledger" and active filter buttons.
2. **Dynamic Mappings**: Task cards display priority colors (Red for high, Yellow for medium, Green for low) and ID badges.
3. **Interactive Toggles**: Clicking "Mark Complete" updates the card style with a line-through title.
4. **Console Logs**: Verify logs inside developer tools:
   * `RouteGuard check: Access Granted`
   * `HTTP Interceptor: Appending Authorization Token Header`

---

## 9. Common Angular Errors & Troubleshooting

1. **`NG0200: Circular dependency in DI`**
   * *Cause*: Service A injects Service B, and Service B injects Service A.
   * *Fix*: Refactor services to decouple shared logic, or use a third shared service.
2. **`NG0300: Standalone Component imports standard NgModule`**
   * *Cause*: Importing an NgModule class instead of importing individual components or using `CommonModule`.
   * *Fix*: Import `CommonModule` or individual standalone components directly in the component's `imports` array.
3. **`NullInjectorError: No provider for HttpClient!`**
   * *Cause*: The application is attempting to inject `HttpClient` in a service, but no provider is registered in `app.config.ts`.
   * *Fix*: Add `provideHttpClient()` to the `providers` array in `app.config.ts`.
4. **`NullInjectorError: No provider for Store!`**
   * *Cause*: NgRx `Store` is injected but `provideStore()` is missing from providers.
   * *Fix*: Register `provideStore({...})` in your `app.config.ts` providers.
5. **`Error: ExpressionChangedAfterItHasBeenCheckedError`**
   * *Cause*: A variable checked in the rendering phase was updated inside a lifecycle hook after the checks completed.
   * *Fix*: Use `ChangeDetectorRef.detectChanges()` or defer state updates using `setTimeout()`.
6. **`Memory leak: Observable subscription remains active`**
   * *Cause*: Subscribing to an Observable inside a component but not unsubscribing when the component is destroyed.
   * *Fix*: Use the `async` pipe in templates, or use RxJS operators like `takeUntil` to automatically unsubscribe.

*(Detailed troubleshooting steps for 14 additional common errors are covered in Cognizant standard manuals).*

---

## 10. Selected Interview & Viva Questions

### Q1. What is the difference between constructor injection and the new `inject()` function in Angular?
* **Answer**: Constructor injection uses type parameters in the class constructor to resolve dependencies. The `inject()` function resolves dependencies dynamically inside the injection context (e.g., class field initializers). Standalone architectures prefer `inject()`.

### Q2. How does the `async` pipe prevent memory leaks?
* **Answer**: The `async` pipe automatically subscribes to an Observable, updates the template when new values are emitted, and **automatically unsubscribes** when the component is destroyed, preventing memory leaks.

### Q3. Explain the difference between `switchMap`, `mergeMap`, and `concatMap`.
* **Answer**:
  * `switchMap`: Cancels the current active inner observable on every new emission. Best for search bars.
  * `mergeMap`: Runs multiple inner observables concurrently. Best for parallel requests.
  * `concatMap`: Queues inner observables, executing them sequentially in order. Best for transactional updates.

---

## 11. Final Verification Checklist

* [x] Standalone configuration compiles without errors.
* [x] Standalone routing works with lazy-loaded components.
* [x] Route guard protects dashboard paths.
* [x] HttpInterceptor injects Authorization token headers.
* [x] NgRx Actions, Reducers, Selectors, and Effects handle state transitions.
* [x] Mock tests verify HttpClient mapping and component dispatches.
* [x] Responsive layout adapt to mobile screens.
