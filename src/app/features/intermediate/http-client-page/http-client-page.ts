import { Component, signal } from '@angular/core';

interface HttpMethod {
  method: string;
  icon: string;
  color: string;
  description: string;
  example: string;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-http-client-page',
  imports: [],
  templateUrl: './http-client-page.html',
  styleUrl: './http-client-page.css',
})
export class HttpClientPage {

  // ======================================================
  // HTTP METHODS
  // ======================================================

  httpMethods: HttpMethod[] = [
    {
      method: 'GET',
      icon: 'download',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Used to fetch data from the server.',
      example: `this.http.get('/api/users')`,
    },
    {
      method: 'POST',
      icon: 'upload',
      color: 'from-pink-500 to-rose-500',
      description:
        'Used to send/create new data.',
      example: `this.http.post('/api/users', body)`,
    },
    {
      method: 'PUT',
      icon: 'edit',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Used to fully update existing data.',
      example: `this.http.put('/api/users/1', body)`,
    },
    {
      method: 'DELETE',
      icon: 'delete',
      color: 'from-red-500 to-rose-600',
      description:
        'Used to remove data from server.',
      example: `this.http.delete('/api/users/1')`,
    },
  ];

  // ======================================================
  // FEATURES
  // ======================================================

  features: FeatureCard[] = [
    {
      title: 'API Communication',
      description:
        'Connect Angular applications with backend APIs and servers.',
      icon: 'cloud_sync',
    },
    {
      title: 'Observable Support',
      description:
        'Built on RxJS Observables for async operations.',
      icon: 'hub',
    },
    {
      title: 'Typed Responses',
      description:
        'Supports TypeScript interfaces for strong typing.',
      icon: 'data_object',
    },
    {
      title: 'Interceptors',
      description:
        'Modify requests globally for tokens, logging, and error handling.',
      icon: 'filter_alt',
    },
  ];

  // ======================================================
  // LIVE API DEMO
  // ======================================================

  users = signal([
    {
      id: 1,
      name: 'Rishabh Kumar',
      role: 'Angular Developer',
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'Frontend Engineer',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      role: 'UI Architect',
    },
  ]);

  loading = signal(false);

  fetchUsers(): void {

    this.loading.set(true);

    setTimeout(() => {

      this.loading.set(false);

    }, 1500);

  }

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  appConfigCode = `import {
  provideHttpClient
} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()
  ]
});
`;

  serviceCode = `import { Injectable, inject } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private http = inject(HttpClient);

  getUsers() {

    return this.http.get(
      'https://api.example.com/users'
    );

  }

}
`;

  componentCode = `import { Component, inject } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent {

  private userService = inject(UserService);

  users: any[] = [];

  ngOnInit() {

    this.userService
      .getUsers()
      .subscribe((response: any) => {

        this.users = response;

      });

  }

}
`;

  postRequestCode = `createUser(user: User) {

  return this.http.post(
    'https://api.example.com/users',
    user
  );

}
`;

  errorHandlingCode = `this.http.get('/api/users')
  .subscribe({

    next: (response) => {
      console.log(response);
    },

    error: (error) => {
      console.error(error);
    }

  });
`;

  asyncPipeCode = `users$ = this.http.get<User[]>(
  '/api/users'
);
`;

  // ======================================================
  // BEST PRACTICES
  // ======================================================

  bestPractices: string[] = [
    'Use Services for API calls',
    'Use Interfaces for response typing',
    'Handle errors properly',
    'Use interceptors for tokens',
    'Avoid API calls directly in templates',
    'Prefer async pipe when possible',
    'Use environment variables for URLs',
    'Unsubscribe or use async pipe',
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What is HttpClient in Angular?',
      answer:
        'HttpClient is Angular’s built-in service for making HTTP requests to backend APIs.',
    },
    {
      question: '2. Why do we use HttpClient?',
      answer:
        'To fetch, create, update, and delete data from APIs or servers.',
    },
    {
      question: '3. What does HttpClient return?',
      answer:
        'HttpClient methods return RxJS Observables.',
    },
    {
      question: '4. Why are Observables useful?',
      answer:
        'They support async streams, cancellation, retries, and operators.',
    },
    {
      question: '5. What is the role of interceptors?',
      answer:
        'Interceptors globally modify requests and responses.',
    },
    {
      question: '6. How do you handle errors in HttpClient?',
      answer:
        'Using subscribe error callback or catchError operator.',
    },
    {
      question: '7. Difference between fetch() and HttpClient?',
      answer:
        'HttpClient integrates with Angular, supports interceptors, observables, typing, and better error handling.',
    },
  ];

}