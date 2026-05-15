import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

interface SsrFeature {
  title: string;
  icon: string;
  color: string;
  description: string;
}

interface ComparisonRow {
  feature: string;
  csr: string;
  ssr: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ssr-and-hydration-page',
  imports: [CommonModule],
  templateUrl: './ssr-and-hydration-page.html',
  styleUrl: './ssr-and-hydration-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsrAndHydrationPage {

  // =========================================================
  // SIGNALS
  // =========================================================

  renderMode = signal<'CSR' | 'SSR'>('CSR');

  hydrationEnabled = signal(true);

  activeRenderInfo = computed(() => {

    if (this.renderMode() === 'SSR') {

      return {
        title: 'Server Side Rendering',
        color: 'text-cyan-300',
        bg: 'from-cyan-500 to-blue-600',
        description:
          'HTML is rendered on the server before reaching the browser.',
      };

    }

    return {
      title: 'Client Side Rendering',
      color: 'text-pink-300',
      bg: 'from-pink-500 to-red-500',
      description:
        'Rendering happens entirely inside the browser using JavaScript.',
    };

  });

  toggleHydration(): void {

    this.hydrationEnabled.update((value) => !value);

  }

  switchMode(mode: 'CSR' | 'SSR'): void {

    this.renderMode.set(mode);

  }

  // =========================================================
  // FEATURES
  // =========================================================

  features: SsrFeature[] = [
    {
      title: 'Server Side Rendering',
      icon: 'dns',
      color: 'from-cyan-500 to-blue-600',
      description:
        'Angular renders the application HTML on the server before sending it to the browser.',
    },
    {
      title: 'Hydration',
      icon: 'water_drop',
      color: 'from-indigo-500 to-purple-600',
      description:
        'Hydration reuses server-rendered HTML and attaches Angular functionality without re-rendering.',
    },
    {
      title: 'SEO Optimization',
      icon: 'search',
      color: 'from-green-500 to-emerald-600',
      description:
        'SSR improves SEO because search engines receive fully rendered HTML.',
    },
    {
      title: 'Faster Initial Load',
      icon: 'bolt',
      color: 'from-yellow-500 to-orange-500',
      description:
        'Users see content faster because HTML is already rendered before JavaScript loads.',
    },
  ];

  // =========================================================
  // COMPARISON
  // =========================================================

  comparisonRows: ComparisonRow[] = [
    {
      feature: 'Rendering Location',
      csr: 'Browser',
      ssr: 'Server',
    },
    {
      feature: 'SEO',
      csr: 'Poor',
      ssr: 'Excellent',
    },
    {
      feature: 'Initial Load',
      csr: 'Slower',
      ssr: 'Faster',
    },
    {
      feature: 'Performance',
      csr: 'Client Heavy',
      ssr: 'Balanced',
    },
    {
      feature: 'Hydration',
      csr: 'Not Required',
      ssr: 'Recommended',
    },
    {
      feature: 'Use Case',
      csr: 'Dashboards / Internal Apps',
      ssr: 'SEO-focused Apps',
    },
  ];

  // =========================================================
  // QUESTIONS
  // =========================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question: '1. What is SSR in Angular?',
      answer:
        'SSR (Server Side Rendering) renders Angular pages on the server before sending HTML to the browser.',
    },
    {
      question: '2. Why do we use SSR?',
      answer:
        'To improve SEO, performance, and initial page loading speed.',
    },
    {
      question: '3. What is Hydration?',
      answer:
        'Hydration attaches Angular functionality to already rendered server HTML without recreating the DOM.',
    },
    {
      question: '4. What problem does hydration solve?',
      answer:
        'It prevents unnecessary DOM re-rendering and improves performance.',
    },
    {
      question: '5. What is Angular Universal?',
      answer:
        'Angular Universal is Angular’s SSR solution that renders Angular applications on the server.',
    },
    {
      question: '6. When should we use SSR?',
      answer:
        'For SEO-heavy applications like blogs, e-commerce, landing pages, and public websites.',
    },
    {
      question: '7. What are disadvantages of SSR?',
      answer:
        'Higher server cost, more complexity, and slower server response if not optimized.',
    },
    {
      question: '8. What is the difference between CSR and SSR?',
      answer:
        'CSR renders pages in the browser, while SSR renders pages on the server.',
    },
  ];

  // =========================================================
  // CODE EXAMPLES
  // =========================================================

  installCode = `
ng add @angular/ssr
`;

  hydrationCode = `
import {
  provideClientHydration
} from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration()
  ]
});
`;

  serverCode = `
import { renderApplication } from '@angular/platform-server';

const html = await renderApplication(AppComponent, {
  document: indexHtml
});
`;

  routeCode = `
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component')
  }
];
`;

  flowCode = `
Browser Request
        ↓
Angular Server
        ↓
HTML Rendered on Server
        ↓
HTML Sent to Browser
        ↓
Hydration Starts
        ↓
Angular Becomes Interactive
`;

  hydrationFlowCode = `
Server HTML
     ↓
Browser Receives HTML
     ↓
Angular Attaches Events
     ↓
DOM Reused
     ↓
Interactive App Ready
`;

}
