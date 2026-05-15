import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-standalone-apis-page',
  imports: [CommonModule],
  templateUrl: './standalone-apis-page.html',
  styleUrl: './standalone-apis-page.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StandaloneApisPage {
  selectedTab = signal<'overview' | 'benefits' | 'examples'>('overview');

  setTab(tab: 'overview' | 'benefits' | 'examples'): void {
    this.selectedTab.set(tab);
  }

standaloneFeatures = [
  {
    title: 'No NgModules',
    description:
      'Standalone APIs remove the need for NgModules and simplify Angular architecture.',
    color: 'from-cyan-500 to-blue-500',
    icon: 'dashboard',
  },
  {
    title: 'Direct Imports',
    description:
      'Components, pipes, and directives can be imported directly into standalone components.',
    color: 'from-purple-500 to-pink-500',
    icon: 'login',
  },
  {
    title: 'Better Lazy Loading',
    description:
      'Standalone APIs make route-level lazy loading cleaner and more scalable.',
    color: 'from-emerald-500 to-green-500',
    icon: 'rocket_launch',
  },
  {
    title: 'Improved Developer Experience',
    description:
      'Less boilerplate, cleaner structure, and easier maintenance.',
    color: 'from-orange-500 to-red-500',
    icon: 'developer_mode',
  },
];

  interviewQuestions = [
    {
      question: 'What are Standalone APIs in Angular?',
      answer:
        'Standalone APIs allow Angular components, directives, and pipes to work without NgModules.',
    },
    {
      question: 'Why were Standalone APIs introduced?',
      answer:
        'To reduce boilerplate, simplify Angular applications, and improve developer experience.',
    },
    {
      question: 'What replaces AppModule in standalone Angular apps?',
      answer:
        'bootstrapApplication() is used instead of AppModule.',
    },
    {
      question: 'Can standalone components be lazy loaded?',
      answer:
        'Yes. Angular supports lazy loading standalone components directly through routes.',
    },
    {
      question: 'Are NgModules completely removed?',
      answer:
        'No. Angular still supports NgModules, but standalone APIs are now the recommended modern approach.',
    },
  ];

  bootstrapCode = `import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);`;

  standaloneComponentCode = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h1>Standalone Component</h1>
  \`
})
export class HomeComponent {}`;
}
