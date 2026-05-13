import { Component, signal } from '@angular/core';

interface StrategyCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface MethodCard {
  method: string;
  description: string;
  useCase: string;
}

interface QuestionItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-change-detection-page',
  imports: [],
  templateUrl: './change-detection-page.html',
  styleUrl: './change-detection-page.css',
})
export class ChangeDetectionPage {

  // ======================================================
  // SIGNAL DEMO
  // ======================================================

  counter = signal(0);

  incrementCounter(): void {
    this.counter.update((value) => value + 1);
  }

  // ======================================================
  // STRATEGIES
  // ======================================================

  strategies: StrategyCard[] = [
    {
      title: 'Default Strategy',
      description:
        'Angular checks the entire component tree whenever any async event, DOM event, timer, HTTP call, or user interaction occurs.',
      icon: 'sync',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'OnPush Strategy',
      description:
        'Angular only checks the component when @Input reference changes, an event occurs inside the component, or change detection is triggered manually.',
      icon: 'bolt',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  // ======================================================
  // METHODS
  // ======================================================

  methods: MethodCard[] = [
    {
      method: 'detectChanges()',
      description:
        'Immediately runs change detection on the component and child views.',
      useCase:
        'Useful when Angular is unaware of changes from third-party libraries or callbacks.',
    },
    {
      method: 'markForCheck()',
      description:
        'Marks an OnPush component as dirty for the next CD cycle.',
      useCase:
        'Useful when observable/service data updates without changing input references.',
    },
    {
      method: 'detach()',
      description:
        'Detaches the component from Angular Change Detection tree.',
      useCase:
        'Useful for high-performance dashboards or large real-time apps.',
    },
    {
      method: 'reattach()',
      description:
        'Re-attaches a detached component back to Angular CD tree.',
      useCase:
        'Useful after temporarily pausing updates.',
    },
    {
      method: 'checkNoChanges()',
      description:
        'Throws an error if bindings changed after a CD cycle.',
      useCase:
        'Mainly used for debugging side effects in development mode.',
    },
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  questions: QuestionItem[] = [
    {
      question:
        '1. What is Change Detection in Angular?',
      answer:
        'Change Detection is the process Angular uses to keep the DOM synchronized with application state.',
    },
    {
      question:
        '2. What triggers Change Detection?',
      answer:
        'DOM events, HTTP responses, timers, promises, observables, async operations, and user interactions trigger change detection.',
    },
    {
      question:
        '3. What are the Change Detection strategies?',
      answer:
        'Angular provides two strategies: Default and OnPush.',
    },
    {
      question:
        '4. How does OnPush improve performance?',
      answer:
        'It reduces unnecessary checks by only running CD when inputs change or events occur.',
    },
    {
      question:
        '5. How can you manually trigger Change Detection?',
      answer:
        'Using ChangeDetectorRef methods like detectChanges(), markForCheck(), detach(), and reattach().',
    },
    {
      question:
        '6. What happens after detach()?',
      answer:
        'Angular stops automatically checking the component during CD cycles.',
    },
    {
      question:
        '7. What is NgZone?',
      answer:
        'NgZone helps Angular detect async operations and automatically trigger change detection.',
    },
    {
      question:
        '8. How do you optimize performance issues caused by CD?',
      answer:
        'Use OnPush, signals, trackBy, pure pipes, memoization, and detach unnecessary components.',
    },
  ];

  // ======================================================
  // BEST PRACTICES
  // ======================================================

  bestPractices: string[] = [
    'Use OnPush for reusable UI components.',
    'Avoid heavy computations inside templates.',
    'Use trackBy with *ngFor.',
    'Prefer Signals and Observables.',
    'Detach high-frequency updating components.',
    'Use pure pipes for transformations.',
    'Avoid unnecessary object recreations.',
    'Use async pipe instead of manual subscriptions.',
  ];

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  defaultStrategyCode = `@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  counter = 0;

  increment() {
    this.counter++;
  }

}
`;

  onPushCode = `@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {

  @Input() user!: User;

}
`;

  detectChangesCode = `constructor(
  private cdr: ChangeDetectorRef
) {}

updateData() {

  setTimeout(() => {

    this.name = 'Angular';

    this.cdr.detectChanges();

  }, 2000);

}
`;

  detachCode = `constructor(
  private cdr: ChangeDetectorRef
) {

  this.cdr.detach();

  setInterval(() => {

    this.data = Date.now();

    this.cdr.detectChanges();

  }, 5000);

}
`;

}