import { Component } from '@angular/core';

interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
}

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceType {
  title: string;
  description: string;
  icon: string;
  code: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-services-page',
  imports: [],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {

  hero: HeroSection = {
    badge: 'Angular Core',
    title: 'Angular Services',
    subtitle:
      'Services help organize reusable business logic, API communication, state management, and shared functionality in Angular applications.',
  };

  introduction = {
    title: 'What is a Service in Angular?',
    description: `
A Service in Angular is a TypeScript class decorated with @Injectable()
that can be injected into components, directives, pipes, or other services
using Angular’s Dependency Injection (DI) system.

Services are mainly used for:

• HTTP API calls
• Shared state management
• Business logic
• Utility/helper functions
• Data sharing between components
• Reusable application logic

Services help keep components clean, reusable,
maintainable, and easier to test.
    `,
  };

  features: ServiceFeature[] = [
    {
      title: 'Reusable Logic',
      description:
        'Write logic once and reuse it across multiple components.',
      icon: '♻️',
    },
    {
      title: 'Cleaner Components',
      description:
        'Move business logic outside components for better architecture.',
      icon: '🧹',
    },
    {
      title: 'API Communication',
      description:
        'Handle HTTP requests and backend communication.',
      icon: '🌐',
    },
    {
      title: 'State Sharing',
      description:
        'Share data between unrelated components.',
      icon: '🔄',
    },
  ];

  serviceCreationSteps = [
    {
      step: '1',
      title: 'Generate Service',
      code: `ng generate service services/user`,
    },
    {
      step: '2',
      title: 'Create Service Logic',
      code: `@Injectable({
  providedIn: 'root'
})
export class UserService {

}`,
    },
    {
      step: '3',
      title: 'Inject Service into Component',
      code: `constructor(
  private userService: UserService
) {}
`,
    },
  ];

  serviceExample = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Alex'
    }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }

}
`;

  componentExample = `import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users: any[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users =
      this.userService.getUsers();
  }

}
`;

  serviceTypes: ServiceType[] = [
    {
      title: 'Singleton Service',
      description:
        'One shared instance throughout the application.',
      icon: '🌍',
      code: `@Injectable({
  providedIn: 'root'
})`,
    },
    {
      title: 'Component-Level Service',
      description:
        'Separate instance created for each component.',
      icon: '🧩',
      code: `@Component({
  providers: [UserService]
})`,
    },
  ];

  realWorldExamples = [
    'Authentication Service',
    'API Data Service',
    'Theme Management Service',
    'Notification Service',
    'Cart Service',
    'Logging Service',
  ];

  bestPractices = [
    'Keep services focused on a single responsibility.',
    'Avoid putting UI logic inside services.',
    'Use services for API communication.',
    'Prefer singleton services for shared state.',
    'Use RxJS Observables for async data.',
    'Avoid tightly coupling services together.',
  ];

  observableExample = `import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode =
    new BehaviorSubject(false);

  darkMode$ =
    this.darkMode.asObservable();

  toggleTheme() {
    this.darkMode.next(
      !this.darkMode.value
    );
  }

}
`;

  interviewQuestions: InterviewQuestion[] = [
    {
      question: 'What is a service in Angular?',
      answer:
        'A service is a reusable TypeScript class used for business logic, API calls, and shared functionality.',
    },
    {
      question: 'Why do we use services?',
      answer:
        'Services improve code reusability, maintainability, separation of concerns, and testing.',
    },
    {
      question: 'What does @Injectable() do?',
      answer:
        'It marks a class as available for dependency injection.',
    },
    {
      question: 'What is providedIn: "root"?',
      answer:
        'It registers the service in the root injector and creates a singleton instance.',
    },
    {
      question: 'How do services share data between components?',
      answer:
        'Using shared state, RxJS Subjects, BehaviorSubjects, or Observables.',
    },
    {
      question: 'Why should business logic not stay inside components?',
      answer:
        'It makes components large, difficult to maintain, and harder to test.',
    },
  ];

}
