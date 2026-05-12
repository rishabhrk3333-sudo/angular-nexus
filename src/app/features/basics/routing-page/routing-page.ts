import { Component } from '@angular/core';

interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
}

interface RoutingType {
  title: string;
  description: string;
  useCase: string;
  icon: string;
  color: string;
  code?: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-routing-page',
  imports: [],
  templateUrl: './routing-page.html',
  styleUrl: './routing-page.css',
})
export class RoutingPage {

    hero: HeroSection = {
    badge: 'Angular Core',
    title: 'Angular Routing',
    subtitle:
      'Angular Routing enables navigation between views in Single Page Applications without reloading the browser.',
  };

  introduction = {
    title: 'What is Routing in Angular?',
    description: `
Routing in Angular is the process of navigating between different pages
or views based on the browser URL.

Angular applications are Single Page Applications (SPAs),
which means the page does not reload completely.
Instead, Angular dynamically swaps components based on routes.

Angular Router allows developers to:

• Navigate between pages
• Load components dynamically
• Pass route parameters
• Handle browser history
• Protect routes using guards
• Lazy load features for performance
    `,
  };

  whyUseRouting = [
    'Navigate between pages dynamically',
    'Create Single Page Applications (SPA)',
    'Support browser back and forward navigation',
    'Enable deep linking with URLs',
    'Pass parameters through routes',
    'Improve application scalability',
  ];

  routingTypes: RoutingType[] = [
    {
      title: 'Static Routing',
      icon: '🛣️',
      color: 'cyan',
      description:
        'Predefined routes declared inside route configuration.',
      useCase:
        'Used for fixed application pages like Home, About, Contact.',
      code: `{
  path: 'home',
  component: HomeComponent
}`,
    },
    {
      title: 'Dynamic Routing',
      icon: '🔄',
      color: 'pink',
      description:
        'Routes containing dynamic parameters.',
      useCase:
        'Used when route values change dynamically like user IDs.',
      code: `{
  path: 'user/:id',
  component: UserComponent
}

// Access parameter
this.route.snapshot
  .paramMap
  .get('id');
`,
    },
    {
      title: 'Nested Routing',
      icon: '🧩',
      color: 'emerald',
      description:
        'Child routes rendered inside parent components.',
      useCase:
        'Used for dashboards, admin panels, and layouts.',
      code: `{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    {
      path: 'users',
      component: UsersComponent
    }
  ]
}`,
    },
    {
      title: 'Lazy Loading',
      icon: '⚡',
      color: 'yellow',
      description:
        'Loads feature modules only when needed.',
      useCase:
        'Improves performance in large applications.',
      code: `{
  path: 'products',
  loadChildren: () =>
    import('./products/products.routes')
      .then(m => m.PRODUCT_ROUTES)
}`,
    },
    {
      title: 'Wildcard Routing',
      icon: '🚫',
      color: 'red',
      description:
        'Fallback route for unknown paths.',
      useCase:
        'Used for 404 Not Found pages.',
      code: `{
  path: '**',
  component: NotFoundComponent
}`,
    },
    {
      title: 'Redirect Routing',
      icon: '➡️',
      color: 'blue',
      description:
        'Redirects one route to another route.',
      useCase:
        'Used for default pages or legacy routes.',
      code: `{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}`,
    },
    {
      title: 'Auxiliary Routing',
      icon: '🪟',
      color: 'purple',
      description:
        'Displays multiple routed views simultaneously.',
      useCase:
        'Used for chat panels, sidebars, and popup outlets.',
      code: `{
  path: 'chat',
  component: ChatComponent,
  outlet: 'popup'
}`,
    },
  ];

  setupSteps = [
    {
      title: 'Provide Router',
      code: `bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});`,
    },
    {
      title: 'Define Routes',
      code: `export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];`,
    },
    {
      title: 'Add Router Outlet',
      code: `<router-outlet />`,
    },
    {
      title: 'Navigate Using routerLink',
      code: `<a routerLink="/home">
  Home
</a>`,
    },
  ];

  eagerVsLazy = [
    {
      title: 'Eager Loading',
      icon: '📦',
      description:
        'Loads all modules immediately when the application starts.',
      advantages: [
        'Simple setup',
        'Good for small apps',
      ],
      disadvantages: [
        'Larger initial bundle size',
        'Slower first load',
      ],
    },
    {
      title: 'Lazy Loading',
      icon: '🚀',
      description:
        'Loads modules only when the route is visited.',
      advantages: [
        'Faster initial load',
        'Better scalability',
      ],
      disadvantages: [
        'Slight delay on first navigation',
      ],
    },
  ];

  standaloneRoutingCode = `import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(c => c.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component')
        .then(c => c.AboutComponent)
  }
];
`;

  bestPractices = [
    'Use lazy loading for feature modules.',
    'Keep routes organized in separate route files.',
    'Use route guards for authentication.',
    'Prefer standalone routing in Angular 17+.',
    'Avoid deeply nested routing structures.',
    'Use route resolvers for preloading data.',
  ];

  interviewQuestions: InterviewQuestion[] = [
    {
      question: 'What is Angular Routing?',
      answer:
        'Angular Routing enables navigation between different views using URLs without reloading the page.',
    },
    {
      question: 'What is lazy loading?',
      answer:
        'Lazy loading loads feature modules only when required, improving application performance.',
    },
    {
      question: 'What is the purpose of router-outlet?',
      answer:
        'router-outlet acts as a placeholder where routed components are rendered.',
    },
    {
      question: 'What is the difference between eager loading and lazy loading?',
      answer:
        'Eager loading loads everything initially, while lazy loading loads modules on demand.',
    },
    {
      question: 'How do you pass route parameters?',
      answer:
        'By defining route parameters using :param syntax and accessing them using ActivatedRoute.',
    },
    {
      question: 'What is wildcard routing?',
      answer:
        'Wildcard routing handles undefined routes and usually displays a 404 page.',
    },
  ];
}
