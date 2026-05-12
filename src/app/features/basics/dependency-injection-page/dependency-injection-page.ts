import { Component } from '@angular/core';

interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
}

interface InfoCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  code?: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-dependency-injection-page',
  imports: [],
  templateUrl: './dependency-injection-page.html',
  styleUrl: './dependency-injection-page.css',
})
export class DependencyInjectionPage {

  hero: HeroSection = {
    badge: 'Angular Core',
    title: 'Dependency Injection',
    subtitle:
      'Dependency Injection (DI) is one of Angular’s most powerful design patterns used to create scalable, maintainable, and loosely coupled applications.',
  };

  whatIsDi = {
    title: 'What is Dependency Injection?',
    description: `
Dependency Injection is a design pattern where a class receives its dependencies
from external sources instead of creating them itself.

Angular’s DI system automatically creates and injects required services into components,
directives, pipes, and other services.
    `,
  };

  benefits: InfoCard[] = [
    {
      title: 'Loose Coupling',
      description:
        'Classes become independent and easier to maintain.',
      icon: '🔗',
      color: 'cyan',
    },
    {
      title: 'Reusability',
      description:
        'Services can be reused across multiple components.',
      icon: '♻️',
      color: 'emerald',
    },
    {
      title: 'Testability',
      description:
        'Mock services can easily replace real services during testing.',
      icon: '🧪',
      color: 'pink',
    },
    {
      title: 'Maintainability',
      description:
        'Centralized business logic improves application structure.',
      icon: '🏗️',
      color: 'yellow',
    },
  ];

  steps = [
    {
      step: '1',
      title: 'Create a Service',
      code: `ng generate service services/user`,
    },
    {
      step: '2',
      title: 'Inject Service into Component',
      code: `constructor(
  private userService: UserService
) {}
`,
    },
    {
      step: '3',
      title: 'Use Service Methods',
      code: `users = this.userService.getUsers();`,
    },
  ];

  serviceExample = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    'John',
    'Alex',
    'Sarah'
  ];

  getUsers() {
    return this.users;
  }
}
`;

  componentExample = `import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {

  users: string[] = [];

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();
  }
}
`;

  providerTypes: InfoCard[] = [
    {
      title: 'providedIn: root',
      description:
        'Creates a singleton service available application-wide.',
      icon: '🌍',
      color: 'cyan',
      code: `@Injectable({
  providedIn: 'root'
})`,
    },
    {
      title: 'Component Providers',
      description:
        'Creates a separate service instance for a component.',
      icon: '🧩',
      color: 'pink',
      code: `@Component({
  providers: [UserService]
})`,
    },
  ];

  interviewQuestions: InterviewQuestion[] = [
    {
      question: 'What is Dependency Injection in Angular?',
      answer:
        'Dependency Injection is a design pattern where Angular automatically provides required dependencies to classes instead of manually creating them.',
    },
    {
      question: 'What is a service in Angular?',
      answer:
        'A service is a reusable class that contains business logic, shared data, or API communication.',
    },
    {
      question: 'What does providedIn: "root" mean?',
      answer:
        'It registers the service in the root injector and creates a singleton instance available throughout the application.',
    },
    {
      question: 'Why is DI important?',
      answer:
        'DI improves maintainability, reusability, scalability, and testing by reducing tight coupling between classes.',
    },
    {
      question: 'What is the difference between constructor injection and inject()?',
      answer:
        'Constructor injection uses the constructor to inject dependencies, while inject() is a functional API introduced in modern Angular for injection outside constructors.',
    },
  ];

  advancedTips = [
    'Use inject() in standalone APIs and functional guards.',
    'Avoid putting business logic directly inside components.',
    'Prefer singleton services for shared state management.',
    'Use interfaces and abstraction for scalable architecture.',
    'Avoid unnecessary component-level providers.',
  ];

}
