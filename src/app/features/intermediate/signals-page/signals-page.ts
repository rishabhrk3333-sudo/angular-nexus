import {   ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal, } from '@angular/core';

interface SignalConcept {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-signals-page',
  imports: [],
  templateUrl: './signals-page.html',
  styleUrl: './signals-page.css',
})
export class SignalsPage {

  // ======================================================
  // BASIC SIGNALS
  // ======================================================

  x = signal(5);

  y = signal(3);

  z = computed(() => this.x() + this.y());

  // ======================================================
  // COUNTER SIGNAL
  // ======================================================

  count = signal(0);

  isEven = computed(() => this.count() % 2 === 0);

  statusText = computed(() =>
    this.isEven() ? 'Even Number' : 'Odd Number'
  );

  // ======================================================
  // EFFECT
  // ======================================================

  logs = signal<string[]>([]);

  loggingEffect = effect(() => {

    const currentValue = this.count();

    this.logs.update((items) => [
      `Signal Updated → Count: ${currentValue}`,
      ...items,
    ]);

  });

  // ======================================================
  // METHODS
  // ======================================================

  increment(): void {
    this.count.update((value) => value + 1);
  }

  decrement(): void {
    this.count.update((value) => value - 1);
  }

  reset(): void {
    this.count.set(0);
  }

  updateX(): void {
    this.x.set(10);
  }

  // ======================================================
  // CONCEPTS
  // ======================================================

  concepts: SignalConcept[] = [
    {
      title: 'signal()',
      description:
        'Creates a reactive writable value that Angular automatically tracks.',
      icon: 'radio_button_checked',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'computed()',
      description:
        'Creates derived state that recalculates only when dependencies change.',
      icon: 'auto_awesome',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'effect()',
      description:
        'Runs side effects automatically whenever dependent signals change.',
      icon: 'bolt',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  // ======================================================
  // BENEFITS
  // ======================================================

  benefits: string[] = [
    'Fine-grained reactivity',
    'Better performance',
    'Less unnecessary Change Detection',
    'Simpler state management',
    'Cleaner reactive code',
    'Works perfectly with OnPush',
    'No need for zone.js in future Angular',
    'Automatic dependency tracking',
  ];

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What are Signals in Angular?',
      answer:
        'Signals are reactive primitives that Angular automatically tracks to update only affected UI parts.',
    },
    {
      question: '2. Why are Signals better for performance?',
      answer:
        'Signals enable fine-grained updates instead of checking the entire component tree.',
    },
    {
      question: '3. What is the difference between signal() and computed()?',
      answer:
        'signal() creates writable state, while computed() creates derived readonly state.',
    },
    {
      question: '4. What is effect() used for?',
      answer:
        'effect() is used for side effects like logging, API calls, or local storage updates.',
    },
    {
      question: '5. Are Signals replacing RxJS?',
      answer:
        'No. Signals handle local reactive state well, while RxJS is still better for streams and async workflows.',
    },
    {
      question: '6. When were Signals introduced?',
      answer:
        'Signals were introduced in Angular 16 and stabilized in Angular 17.',
    },
    {
      question: '7. Do Signals work with OnPush?',
      answer:
        'Yes. Signals integrate extremely well with OnPush change detection.',
    },
  ];

  // ======================================================
  // CODE EXAMPLES
  // ======================================================

  basicSignalCode = `import { signal } from '@angular/core';

count = signal(0);

increment() {
  this.count.update(value => value + 1);
}
`;

  computedCode = `import { computed } from '@angular/core';

count = signal(10);

isEven = computed(() => {
  return this.count() % 2 === 0;
});
`;

  effectCode = `import { effect } from '@angular/core';

count = signal(0);

constructor() {

  effect(() => {

    console.log(this.count());

  });

}
`;

  comparisonCode = `// WITHOUT SIGNALS

let x = 5;
let y = 3;

let z = x + y;

console.log(z); // 8

x = 10;

console.log(z); // Still 8


// WITH SIGNALS

const x = signal(5);
const y = signal(3);

const z = computed(() => x() + y());

console.log(z()); // 8

x.set(10);

console.log(z()); // 13
`;

}