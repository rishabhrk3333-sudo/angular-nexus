import { Component } from '@angular/core';

interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
}

interface TemplateType {
  title: string;
  description: string;
  icon: string;
  color: string;
  advantages: string[];
  code: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-templates-page',
  imports: [],
  templateUrl: './templates-page.html',
  styleUrl: './templates-page.css',
})
export class TemplatesPage {

    hero: HeroSection = {
    badge: 'Angular Basics',
    title: 'Angular Templates',
    subtitle:
      'Templates define how Angular components render UI and interact with application data dynamically.',
  };

  introduction = {
    title: 'What is a Template?',
    description: `
A Template in Angular is a special type of HTML that Angular uses
to render the UI of a component.

Angular templates are more powerful than normal HTML because they support:

• Data Binding
• Directives
• Pipes
• Event Handling
• Conditional Rendering
• Dynamic Rendering

Angular evaluates the template, generates HTML,
and renders it into the browser DOM.
    `,
  };

  features = [
    {
      title: 'Dynamic Rendering',
      icon: '⚡',
      description:
        'Templates update automatically whenever component data changes.',
    },
    {
      title: 'Data Binding',
      icon: '🔄',
      description:
        'Angular templates connect component logic with the UI.',
    },
    {
      title: 'Reusable UI',
      icon: '♻️',
      description:
        'Templates help create modular and reusable components.',
    },
    {
      title: 'Powerful Syntax',
      icon: '🚀',
      description:
        'Angular templates support directives, pipes, and events.',
    },
  ];

  templateTypes: TemplateType[] = [
    {
      title: 'Inline Template',
      icon: '🧩',
      color: 'cyan',
      description:
        'The HTML template is written directly inside the component decorator using the template property.',
      advantages: [
        'Useful for very small components',
        'Quick prototyping',
        'Keeps component self-contained',
      ],
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: \`
    <div>
      <h1>
        Hello {{ name }}
      </h1>

      <h2>
        Welcome to Angular!
      </h2>
    </div>
  \`
})
export class GreetComponent {

  name = 'Rishabh';

}
`,
    },
    {
      title: 'Linked Template',
      icon: '📄',
      color: 'pink',
      description:
        'The HTML template is stored in a separate file using templateUrl.',
      advantages: [
        'Best for large components',
        'Cleaner architecture',
        'Easy to maintain',
      ],
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent {

  name = 'Angular';

}
`,
    },
  ];

  linkedHtmlExample = `<!-- greet.component.html -->

<div class="card">

  <h1>
    Hello {{ name }}
  </h1>

  <p>
    Welcome to Angular Templates
  </p>

</div>
`;

  templateSyntaxExamples = [
    {
      title: 'Interpolation',
      syntax: `{{ userName }}`,
      description:
        'Displays dynamic values from the component.',
    },
    {
      title: 'Property Binding',
      syntax: `[src]="imageUrl"`,
      description:
        'Binds component values to DOM properties.',
    },
    {
      title: 'Event Binding',
      syntax: `(click)="save()"`,
      description:
        'Listens to DOM events.',
    },
    {
      title: 'Two-Way Binding',
      syntax: `[(ngModel)]="username"`,
      description:
        'Synchronizes data between component and UI.',
    },
  ];

  bestPractices = [
    'Keep templates clean and readable.',
    'Avoid heavy business logic inside templates.',
    'Use reusable components for large UIs.',
    'Use trackBy with loops for performance.',
    'Prefer linked templates for scalability.',
    'Use Angular control flow syntax (@if, @for).',
  ];

  interviewQuestions: InterviewQuestion[] = [
    {
      question: 'What is an Angular template?',
      answer:
        'An Angular template defines the UI of a component using enhanced HTML syntax supported by Angular.',
    },
    {
      question: 'What is the difference between inline and linked templates?',
      answer:
        'Inline templates are written directly in the component decorator, while linked templates use external HTML files via templateUrl.',
    },
    {
      question: 'Why are Angular templates powerful?',
      answer:
        'Because they support data binding, directives, event handling, pipes, and dynamic rendering.',
    },
    {
      question: 'When should you use inline templates?',
      answer:
        'For small or simple components where keeping everything together improves readability.',
    },
    {
      question: 'Why are linked templates preferred in large applications?',
      answer:
        'They improve maintainability, readability, and separation of concerns.',
    },
  ];


}
