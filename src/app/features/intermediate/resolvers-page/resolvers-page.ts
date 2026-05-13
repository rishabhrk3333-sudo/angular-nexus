import { Component, signal } from '@angular/core';

interface ResolverBenefit {
  title: string;
  icon: string;
  description: string;
  color: string;
}

interface ResolverType {
  title: string;
  example: string;
  description: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-resolvers-page',
  imports: [],
  templateUrl: './resolvers-page.html',
  styleUrl: './resolvers-page.css',
})
export class ResolversPage {

  // ======================================================
  // LIVE DEMO
  // ======================================================

  loading = signal(false);

  userLoaded = signal(false);

  userData = signal({
    id: 101,
    name: 'Rishabh Kumar',
    role: 'Angular Developer',
    company: 'Angular Nexus',
  });

  simulateResolver(): void {

    this.loading.set(true);

    this.userLoaded.set(false);

    setTimeout(() => {

      this.loading.set(false);

      this.userLoaded.set(true);

    }, 2500);

  }

  // ======================================================
  // BENEFITS
  // ======================================================

  benefits: ResolverBenefit[] = [
    {
      title: 'Preload Data',
      icon: 'database',
      description:
        'Fetch required data before navigating to a route.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Better UX',
      icon: 'bolt',
      description:
        'Avoid empty screens and loading flickers.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Cleaner Components',
      icon: 'code',
      description:
        'Move API loading logic outside components.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Centralized Data Fetching',
      icon: 'hub',
      description:
        'Manage route-level data loading in one place.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  // ======================================================
  // TYPES
  // ======================================================

  resolverTypes: ResolverType[] = [
    {
      title: 'Static Resolver',
      example: 'Load static route data before opening a page.',
      description:
        'Simple resolver used to fetch route data once.',
    },
    {
      title: 'Dynamic Resolver',
      example: 'Fetch user data using route params like /user/:id',
      description:
        'Uses dynamic parameters from the URL.',
    },
    {
      title: 'API Resolver',
      example: 'Call backend APIs before route activation.',
      description:
        'Most common resolver type in enterprise apps.',
    },
  ];

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  basicResolverCode = `import { inject } from '@angular/core';

import {
  ResolveFn
} from '@angular/router';

import { UserService }
from './user.service';

export const userResolver:
ResolveFn<any> = (route) => {

  const userService =
    inject(UserService);

  const id =
    route.paramMap.get('id');

  return userService.getUser(id);

};
`;

  routesCode = `export const routes: Routes = [

  {
    path: 'user/:id',

    component: UserComponent,

    resolve: {
      user: userResolver
    }
  }

];
`;

  componentCode = `import {
  ActivatedRoute
} from '@angular/router';

constructor(
  private route: ActivatedRoute
) {}

ngOnInit(): void {

  this.route.data.subscribe(data => {

    console.log(data['user']);

  });

}
`;

  apiResolverCode = `getUser(id: string) {

  return this.http.get(
    \`https://api.com/users/\${id}\`
  );

}
`;

  errorHandlingCode = `export const productResolver:
ResolveFn<any> = () => {

  const service =
    inject(ProductService);

  const router =
    inject(Router);

  return service.getProducts().pipe(

    catchError(() => {

      router.navigate(['/error']);

      return EMPTY;

    })

  );

};
`;

  // ======================================================
  // BEST PRACTICES
  // ======================================================

  bestPractices: string[] = [
    'Use resolvers for critical route data',
    'Avoid heavy API chains inside resolvers',
    'Handle API errors gracefully',
    'Use caching for repeated requests',
    'Keep resolver logic lightweight',
    'Use loading indicators for slow APIs',
    'Prefer resolvers for route-level data',
    'Avoid unnecessary duplicate API calls',
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question:
        '1. What is a Resolver in Angular?',
      answer:
        'A Resolver fetches data before a route is activated.',
    },
    {
      question:
        '2. Why do we use resolvers?',
      answer:
        'To preload route data and improve user experience.',
    },
    {
      question:
        '3. What interface is used for resolvers?',
      answer:
        'Angular uses Resolve or ResolveFn.',
    },
    {
      question:
        '4. Difference between resolver and ngOnInit API call?',
      answer:
        'Resolvers fetch data before route activation, while ngOnInit fetches after component loads.',
    },
    {
      question:
        '5. Can resolvers handle errors?',
      answer:
        'Yes, using catchError and route redirection.',
    },
    {
      question:
        '6. Do resolvers block navigation?',
      answer:
        'Yes, Angular waits until resolver data is completed.',
    },
    {
      question:
        '7. Can we use multiple resolvers?',
      answer:
        'Yes, multiple resolvers can run together on the same route.',
    },
  ];

}
