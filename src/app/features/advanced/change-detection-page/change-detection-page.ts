import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  computed,
  effect,
  signal,
} from '@angular/core';

interface StrategyCard {
  title: string;
  icon: string;
  color: string;
  description: string;
}

interface MethodCard {
  method: string;
  description: string;
  useCase: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-change-detection-page',
  imports: [],
  templateUrl: './change-detection-page.html',
  styleUrl: './change-detection-page.css',
})
export class ChangeDetectionPage  {

  // ======================================================
  // SIGNALS DEMO
  // ======================================================

  counter = signal(0);

  expensiveCounter = computed(() => {
    return this.counter() * 100;
  });

  logs = signal<string[]>([]);

  detached = signal(false);

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {

    effect(() => {
      this.logs.update((items) => [
        `CD Triggered → Counter = ${this.counter()}`,
        ...items,
      ]);
    });

  }

  increment(): void {

    this.counter.update((value) => value + 1);

  }

  detectChangesManually(): void {

    this.counter.update((value) => value + 1);

    this.cdr.detectChanges();

    this.logs.update((items) => [
      'detectChanges() manually triggered',
      ...items,
    ]);

  }

  markForCheck(): void {

    this.counter.update((value) => value + 1);

    this.cdr.markForCheck();

    this.logs.update((items) => [
      'markForCheck() triggered',
      ...items,
    ]);

  }

  detachView(): void {

    this.cdr.detach();

    this.detached.set(true);

    this.logs.update((items) => [
      'View detached from CD Tree',
      ...items,
    ]);

  }

  reattachView(): void {

    this.cdr.reattach();

    this.detached.set(false);

    this.logs.update((items) => [
      'View reattached to CD Tree',
      ...items,
    ]);

  }

  runOutsideAngular(): void {

    this.ngZone.runOutsideAngular(() => {

      setTimeout(() => {

        this.counter.update((value) => value + 5);

        this.logs.update((items) => [
          'Updated outside Angular Zone',
          ...items,
        ]);

      }, 1000);

    });

  }

  // ======================================================
  // STRATEGIES
  // ======================================================

  strategies: StrategyCard[] = [
    {
      title: 'Default Strategy',
      icon: 'sync',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Angular checks the entire component tree whenever any event occurs.',
    },
    {
      title: 'OnPush Strategy',
      icon: 'bolt',
      color: 'from-pink-500 to-red-500',
      description:
        'Angular checks component only when input references change or events occur.',
    },
  ];

  // ======================================================
  // METHODS
  // ======================================================

  methods: MethodCard[] = [
    {
      method: 'detectChanges()',
      description:
        'Immediately triggers change detection manually.',
      useCase:
        'Useful when Angular does not detect async changes.',
    },
    {
      method: 'markForCheck()',
      description:
        'Marks component dirty for next CD cycle.',
      useCase:
        'Works well with OnPush strategy.',
    },
    {
      method: 'detach()',
      description:
        'Removes component from CD tree.',
      useCase:
        'Useful in high-performance dashboards.',
    },
    {
      method: 'reattach()',
      description:
        'Re-attaches detached component.',
      useCase:
        'Used when updates are needed again.',
    },
    {
      method: 'checkNoChanges()',
      description:
        'Throws error if bindings changed.',
      useCase:
        'Helpful for debugging in development.',
    },
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What is Change Detection in Angular?',
      answer:
        'It is the mechanism Angular uses to synchronize the UI with application state.',
    },
    {
      question: '2. What triggers Change Detection?',
      answer:
        'User events, HTTP requests, timers, promises, observables, and async operations.',
    },
    {
      question: '3. What are Change Detection strategies?',
      answer:
        'Angular provides Default and OnPush strategies.',
    },
    {
      question: '4. How does OnPush improve performance?',
      answer:
        'It reduces unnecessary checks by limiting CD runs.',
    },
    {
      question: '5. How can we manually trigger CD?',
      answer:
        'Using ChangeDetectorRef methods like detectChanges() and markForCheck().',
    },
    {
      question: '6. What happens after detach()?',
      answer:
        'Angular stops checking that component automatically.',
    },
    {
      question: '7. What is NgZone?',
      answer:
        'NgZone helps Angular know when async tasks complete and when to trigger CD.',
    },
    {
      question: '8. How to optimize performance issues?',
      answer:
        'Use OnPush, Signals, trackBy, lazy loading, memoization, and detach heavy components.',
    },
  ];

  // ======================================================
  // CODE SNIPPETS
  // ======================================================

  defaultStrategyCode = `
@Component({
  selector: 'app-demo',

  templateUrl: './demo.html',

  changeDetection:
    ChangeDetectionStrategy.Default
})
export class DemoComponent {}
`;

  onPushCode = `
@Component({
  selector: 'app-user',

  templateUrl: './user.html',

  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class UserComponent {}
`;

  detectChangesCode = `
constructor(
  private cdr: ChangeDetectorRef
) {}

updateData(): void {

  this.cdr.detectChanges();

}
`;

  markForCheckCode = `
constructor(
  private cdr: ChangeDetectorRef
) {}

fetchData(): void {

  this.cdr.markForCheck();

}
`;

  detachCode = `
constructor(
  private cdr: ChangeDetectorRef
) {}

ngOnInit(): void {

  this.cdr.detach();

}
`;

  zoneCode = `
constructor(
  private ngZone: NgZone
) {}

runTask(): void {

  this.ngZone.runOutsideAngular(() => {

    setTimeout(() => {

      console.log('Outside Angular');

    }, 1000);

  });

}
`;

}
