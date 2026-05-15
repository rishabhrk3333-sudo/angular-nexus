import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

interface CompilerCard {
  title: string;
  icon: string;
  color: string;
  description: string;
}

interface ComparisonRow {
  feature: string;
  jit: string;
  aot: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-angular-copiler-page',
  imports: [],
  templateUrl: './angular-copiler-page.html',
  styleUrl: './angular-copiler-page.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AngularCopilerPage 
{

  // ======================================================
  // SIGNAL DEMO
  // ======================================================

  buildMode = signal<'JIT' | 'AOT'>('JIT');

  compilerInfo = computed(() => {

    if (this.buildMode() === 'JIT') {

      return {
        title: 'JIT Compiler',
        color: 'text-yellow-300',
        bg: 'from-yellow-500 to-orange-500',
        description:
          'Compilation happens inside the browser during runtime.',
      };

    }

    return {
      title: 'AOT Compiler',
      color: 'text-cyan-300',
      bg: 'from-cyan-500 to-blue-500',
      description:
        'Compilation happens during build time before deployment.',
    };

  });

  setMode(mode: 'JIT' | 'AOT'): void {

    this.buildMode.set(mode);

  }

  // ======================================================
  // CARDS
  // ======================================================

  compilerCards: CompilerCard[] = [
    {
      title: 'JIT Compiler',
      icon: 'bolt',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Compiles Angular templates in the browser during runtime.',
    },
    {
      title: 'AOT Compiler',
      icon: 'rocket_launch',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Compiles Angular code during build time for production optimization.',
    },
    {
      title: 'Transpiling',
      icon: 'code_blocks',
      color: 'from-pink-500 to-red-500',
      description:
        'Converts TypeScript into JavaScript so browsers can execute it.',
    },
  ];

  // ======================================================
  // COMPARISON
  // ======================================================

  comparisonRows: ComparisonRow[] = [
    {
      feature: 'Compilation Time',
      jit: 'Runtime (Browser)',
      aot: 'Build Time',
    },
    {
      feature: 'Initial Load',
      jit: 'Slower',
      aot: 'Faster',
    },
    {
      feature: 'Bundle Size',
      jit: 'Larger',
      aot: 'Smaller',
    },
    {
      feature: 'Performance',
      jit: 'Lower',
      aot: 'Better',
    },
    {
      feature: 'Security',
      jit: 'Less Secure',
      aot: 'More Secure',
    },
    {
      feature: 'Usage',
      jit: 'Development',
      aot: 'Production',
    },
  ];

  // ======================================================
  // QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What is AOT in Angular?',
      answer:
        'Ahead-of-Time compilation converts Angular templates and TypeScript into JavaScript during build time.',
    },
    {
      question: '2. What is JIT in Angular?',
      answer:
        'Just-in-Time compilation compiles Angular templates inside the browser during runtime.',
    },
    {
      question: '3. Why is AOT preferred in production?',
      answer:
        'Because it improves performance, reduces bundle size, and increases security.',
    },
    {
      question: '4. What is transpiling?',
      answer:
        'Transpiling means converting TypeScript into JavaScript for browser compatibility.',
    },
    {
      question: '5. Which compiler does ng serve use?',
      answer:
        'ng serve generally uses JIT compilation during development.',
    },
    {
      question: '6. Which compiler is used in production build?',
      answer:
        'Production builds use AOT compilation.',
    },
    {
      question: '7. How does AOT improve security?',
      answer:
        'Templates are compiled before deployment, reducing runtime template injection risks.',
    },
    {
      question: '8. What is Ivy compiler?',
      answer:
        'Ivy is Angular’s modern rendering and compilation engine introduced for better performance and smaller bundles.',
    },
  ];

  // ======================================================
  // CODE SNIPPETS
  // ======================================================

  jitCode = `
ng serve

// Development mode
// JIT Compilation
`;

  aotCode = `
ng build --configuration production

// Production build
// AOT Compilation
`;

  transpileCode = `
// TypeScript
const user: string = 'Rishabh';

// JavaScript Output
const user = 'Rishabh';
`;

  ivyCode = `
{
  "angularCompilerOptions": {
    "enableIvy": true
  }
}
`;

  buildFlowCode = `
TypeScript + HTML + SCSS
           ↓
Angular Compiler
           ↓
Transpiling
           ↓
Optimized JavaScript
           ↓
Browser Rendering
`;

}
