import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  computed,
  effect,
  signal,
} from '@angular/core';

interface ZoneFeature {
  title: string;
  icon: string;
  color: string;
  description: string;
}

interface ZoneQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ng-zone-page',
  imports: [],
  templateUrl: './ng-zone-page.html',
  styleUrl: './ng-zone-page.css',
})
export class NgZonePage {

  // =========================================================
  // SIGNALS
  // =========================================================

  angularCounter = signal(0);

  outsideCounter = signal(0);

  logs = signal<string[]>([]);

  currentMode = computed(() => {

    return this.angularCounter() > this.outsideCounter()
      ? 'Angular Zone Active'
      : 'Outside Angular Zone Running';

  });

  // =========================================================
  // FEATURES
  // =========================================================

  zoneFeatures: ZoneFeature[] = [
    {
      title: 'Automatic Change Detection',
      icon: 'sync',
      color: 'from-cyan-500 to-blue-500',
      description:
        'NgZone automatically triggers Angular change detection whenever async operations complete.',
    },
    {
      title: 'Performance Optimization',
      icon: 'speed',
      color: 'from-pink-500 to-red-500',
      description:
        'runOutsideAngular() prevents unnecessary change detection cycles for better performance.',
    },
    {
      title: 'Async Tracking',
      icon: 'timer',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Angular tracks async tasks like setTimeout, Promise, HTTP calls, and events.',
    },
    {
      title: 'Manual Control',
      icon: 'tune',
      color: 'from-purple-500 to-indigo-500',
      description:
        'Developers can manually re-enter Angular zone using ngZone.run().',
    },
  ];

  // =========================================================
  // QUESTIONS
  // =========================================================

  interviewQuestions: ZoneQuestion[] = [
    {
      question: '1. What is NgZone in Angular?',
      answer:
        'NgZone is an Angular service that helps Angular detect asynchronous operations and automatically trigger change detection.',
    },
    {
      question: '2. Why do we use runOutsideAngular()?',
      answer:
        'To execute code without triggering Angular change detection for every async event, improving performance.',
    },
    {
      question: '3. What async operations does Angular track?',
      answer:
        'Angular tracks setTimeout, setInterval, Promises, DOM events, HTTP requests, and Observables.',
    },
    {
      question: '4. What happens if code runs outside Angular zone?',
      answer:
        'Angular will not automatically trigger change detection for that operation.',
    },
    {
      question: '5. How can we manually trigger Angular zone?',
      answer:
        'Using ngZone.run(() => {}) to bring execution back into Angular zone.',
    },
    {
      question: '6. Why is NgZone important for performance?',
      answer:
        'It allows developers to avoid unnecessary DOM checks and optimize large applications.',
    },
    {
      question: '7. What is Zone.js?',
      answer:
        'Zone.js is a library used by Angular to patch async APIs and notify Angular when async operations complete.',
    },
    {
      question: '8. Can Angular work without Zone.js?',
      answer:
        'Yes. Modern Angular supports zoneless applications using Signals and manual change detection strategies.',
    },
  ];

  // =========================================================
  // CODE SNIPPETS
  // =========================================================

  basicCode = `
constructor(private ngZone: NgZone) {}

this.ngZone.run(() => {
  console.log('Inside Angular Zone');
});
`;

  outsideCode = `
this.ngZone.runOutsideAngular(() => {

  setInterval(() => {

    console.log('No Change Detection');

  }, 1000);

});
`;

  backInsideCode = `
this.ngZone.runOutsideAngular(() => {

  setTimeout(() => {

    this.ngZone.run(() => {

      this.data = 'Updated!';
      console.log('Back inside Angular');

    });

  }, 2000);

});
`;

  zonelessCode = `
bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
});
`;

  flowCode = `
User Event / Async Task
            ↓
        Zone.js
            ↓
Angular gets notified
            ↓
Change Detection Starts
            ↓
DOM Updates
`;

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(private ngZone: NgZone) {

    effect(() => {

      console.log(
        'Angular Counter:',
        this.angularCounter()
      );

    });

  }

  // =========================================================
  // DEMO METHODS
  // =========================================================

  runInsideAngular(): void {

    this.ngZone.run(() => {

      setTimeout(() => {

        this.angularCounter.update((value) => value + 1);

        this.logs.update((logs) => [
          ...logs,
          '✔️ Change Detection Triggered Inside Angular Zone',
        ]);

      }, 500);

    });

  }

  runOutsideAngular(): void {

    this.ngZone.runOutsideAngular(() => {

      setTimeout(() => {

        this.outsideCounter.update((value) => value + 1);

        this.logs.update((logs) => [
          ...logs,
          '⚡ Executed Outside Angular Zone',
        ]);

      }, 500);

    });

  }

  clearLogs(): void {

    this.logs.set([]);

  }

}
