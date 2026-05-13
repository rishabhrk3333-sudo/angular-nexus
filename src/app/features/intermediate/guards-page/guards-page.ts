import { Component, signal } from '@angular/core';

interface GuardType {
  title: string;
  icon: string;
  color: string;
  description: string;
  example: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-guards-page',
  imports: [],
  templateUrl: './guards-page.html',
  styleUrl: './guards-page.css',
})
export class GuardsPage {

  // ======================================================
  // GUARD TYPES
  // ======================================================

  guardTypes: GuardType[] = [
    {
      title: 'CanActivate',
      icon: 'lock',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Prevents users from entering a route unless conditions are met.',
      example:
        'Protect dashboard pages for logged-in users only.',
    },
    {
      title: 'CanActivateChild',
      icon: 'account_tree',
      color: 'from-pink-500 to-rose-500',
      description:
        'Protects all child routes of a parent route.',
      example:
        '/admin/users and /admin/settings protected together.',
    },
    {
      title: 'CanLoad',
      icon: 'download_for_offline',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Stops lazy-loaded modules from downloading.',
      example:
        'Prevent ReportsModule from loading for guests.',
    },
    {
      title: 'CanDeactivate',
      icon: 'warning',
      color: 'from-red-500 to-rose-600',
      description:
        'Asks confirmation before leaving a page.',
      example:
        'Warn users about unsaved forms.',
    },
  ];

  // ======================================================
  // AUTH FLOW DEMO
  // ======================================================

  isLoggedIn = signal(false);

  toggleLogin(): void {

    this.isLoggedIn.update((value) => !value);

  }

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  canActivateCode = `import {
  inject
} from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const authGuard:
CanActivateFn = () => {

  const isLoggedIn =
    localStorage.getItem('token');

  const router = inject(Router);

  if (isLoggedIn) {

    return true;

  }

  router.navigate(['/login']);

  return false;

};
`;

  routesCode = `export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  }

];
`;

  canActivateChildCode = `{
  path: 'admin',

  canActivate: [authGuard],

  canActivateChild: [authGuard],

  children: [

    {
      path: 'users',
      component: UsersComponent
    },

    {
      path: 'settings',
      component: SettingsComponent
    }

  ]

}
`;

  canLoadCode = `{
  path: 'reports',

  canLoad: [authGuard],

  loadChildren: () =>
    import('./reports/reports.routes')
      .then(m => m.REPORT_ROUTES)

}
`;

  canDeactivateCode = `export interface CanComponentDeactivate {

  canDeactivate: () =>
    boolean | Observable<boolean>;

}

export const canDeactivateGuard:
CanDeactivateFn<CanComponentDeactivate> =
(component) => {

  return component.canDeactivate
    ? component.canDeactivate()
    : true;

};
`;

  roleGuardCode = `export const adminGuard:
CanActivateFn = () => {

  const role =
    localStorage.getItem('role');

  return role === 'admin';

};
`;

  // ======================================================
  // BEST PRACTICES
  // ======================================================

  bestPractices: string[] = [
    'Use guards only for route access control',
    'Keep authentication logic inside services',
    'Combine guards with backend security',
    'Use lazy loading with CanLoad',
    'Redirect unauthorized users properly',
    'Avoid heavy API calls inside guards',
    'Use role-based authorization',
    'Protect both frontend and backend routes',
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question:
        '1. What is an Auth Guard in Angular?',
      answer:
        'An Auth Guard controls route access based on authentication or authorization.',
    },
    {
      question:
        '2. Difference between authentication and authorization?',
      answer:
        'Authentication verifies identity, while authorization controls access permissions.',
    },
    {
      question:
        '3. What is CanActivate used for?',
      answer:
        'It prevents users from entering routes unless conditions are satisfied.',
    },
    {
      question:
        '4. What is CanLoad used for?',
      answer:
        'It prevents lazy-loaded modules from downloading unless allowed.',
    },
    {
      question:
        '5. What is CanDeactivate used for?',
      answer:
        'It warns users before leaving unsaved pages.',
    },
    {
      question:
        '6. Difference between CanActivate and CanActivateChild?',
      answer:
        'CanActivate protects a route, while CanActivateChild protects all child routes.',
    },
    {
      question:
        '7. Are Angular guards enough for security?',
      answer:
        'No. Backend APIs must also validate authentication and authorization.',
    },
  ];

}
