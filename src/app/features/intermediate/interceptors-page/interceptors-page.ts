import { Component, signal } from '@angular/core';

interface InterceptorType {
  title: string;
  icon: string;
  color: string;
  description: string;
  useCase: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-interceptors-page',
  imports: [],
  templateUrl: './interceptors-page.html',
  styleUrl: './interceptors-page.css',
})
export class InterceptorsPage {

  // ======================================================
  // INTERCEPTOR TYPES
  // ======================================================

  interceptorTypes: InterceptorType[] = [
    {
      title: 'Authentication Interceptor',
      icon: 'shield_lock',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Adds JWT or auth tokens to every outgoing request.',
      useCase:
        'Automatically attach Authorization headers globally.',
    },
    {
      title: 'Retry Interceptor',
      icon: 'restart_alt',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Retries failed HTTP requests automatically.',
      useCase:
        'Useful for unstable networks or temporary API failures.',
    },
    {
      title: 'Logging Interceptor',
      icon: 'monitoring',
      color: 'from-pink-500 to-rose-500',
      description:
        'Logs requests and responses for debugging.',
      useCase:
        'Helpful during development and analytics tracking.',
    },
    {
      title: 'Error Handling Interceptor',
      icon: 'error',
      color: 'from-red-500 to-rose-600',
      description:
        'Catches HTTP errors globally in one place.',
      useCase:
        'Handle 401, 403, and 500 errors centrally.',
    },
    {
      title: 'Loading Spinner Interceptor',
      icon: 'progress_activity',
      color: 'from-purple-500 to-indigo-500',
      description:
        'Shows loading indicators during API calls.',
      useCase:
        'Improves UX while waiting for backend responses.',
    },
    {
      title: 'Custom Header Interceptor',
      icon: 'tune',
      color: 'from-emerald-500 to-green-500',
      description:
        'Adds custom headers to every request.',
      useCase:
        'Attach tenant IDs, locale info, or API keys.',
    },
  ];

  // ======================================================
  // LIVE FLOW DEMO
  // ======================================================

  currentStep = signal(1);

  nextStep(): void {

    if (this.currentStep() < 4) {

      this.currentStep.update((value) => value + 1);

      return;

    }

    this.currentStep.set(1);

  }

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  interceptorCode = `import {
  Injectable
} from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor
  implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    const authReq = req.clone({

      setHeaders: {
        Authorization: \`Bearer \${token}\`
      }

    });

    return next.handle(authReq);

  }

}
`;

  providerCode = `import {
  HTTP_INTERCEPTORS
} from '@angular/common/http';

providers: [

  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }

]
`;

  retryCode = `import {
  retry
} from 'rxjs/operators';

return next.handle(req).pipe(

  retry(3)

);
`;

  errorHandlingCode = `return next.handle(req).pipe(

  catchError((error) => {

    if (error.status === 401) {

      console.log('Unauthorized');

    }

    return throwError(() => error);

  })

);
`;

  spinnerCode = `intercept(req, next) {

  this.loaderService.show();

  return next.handle(req).pipe(

    finalize(() => {

      this.loaderService.hide();

    })

  );

}
`;

  // ======================================================
  // BEST PRACTICES
  // ======================================================

  bestPractices: string[] = [
    'Keep interceptors lightweight',
    'Avoid business logic inside interceptors',
    'Use interceptors for cross-cutting concerns',
    'Handle errors globally',
    'Use retry carefully to avoid loops',
    'Always clone requests before modifying',
    'Use multiple interceptors with multi: true',
    'Avoid storing sensitive tokens insecurely',
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What is an Interceptor in Angular?',
      answer:
        'An interceptor intercepts HTTP requests and responses globally before they reach the server or app logic.',
    },
    {
      question: '2. Why do we use interceptors?',
      answer:
        'To avoid repeating common HTTP logic like authentication, logging, retries, and error handling.',
    },
    {
      question: '3. Why do we clone requests?',
      answer:
        'Because HttpRequest objects are immutable in Angular.',
    },
    {
      question: '4. What does multi: true mean?',
      answer:
        'It allows registering multiple interceptors instead of replacing previous ones.',
    },
    {
      question: '5. Can interceptors modify responses?',
      answer:
        'Yes, interceptors can transform both requests and responses.',
    },
    {
      question: '6. What is the order of interceptor execution?',
      answer:
        'Requests execute in registration order, responses return in reverse order.',
    },
    {
      question: '7. Difference between interceptor and service?',
      answer:
        'Services contain reusable business logic, while interceptors globally intercept HTTP traffic.',
    },
  ];

}