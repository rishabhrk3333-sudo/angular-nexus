import { Component } from '@angular/core';


interface PipeSection {
  title: string;
  description: string;
  color: string;
  icon: string;
  code?: string;
}

@Component({
  selector: 'app-pipes-page',
  imports: [],
  templateUrl: './pipes-page.html',
  styleUrl: './pipes-page.css',
})
export class PipesPage {

   hero = {
    badge: 'Angular Basics',
    title: 'Angular Pipes',
    subtitle:
      'Pipes transform data directly inside Angular templates and improve readability.',
  };

  pipeTypes: PipeSection[] = [
    {
      title: 'Pure Pipes',
      description:
        'Runs only when Angular detects a pure change in input reference.',
      color: 'cyan',
      icon: '⚡',
      code: `@Pipe({
  name: 'myPurePipe',
  pure: true
})`,
    },
    {
      title: 'Impure Pipes',
      description:
        'Runs on every Angular change detection cycle.',
      color: 'pink',
      icon: '🔥',
      code: `@Pipe({
  name: 'myImpurePipe',
  pure: false
})`,
    },
  ];

  interviewQuestions = [
    {
      question: 'Why do we use pure pipes?',
      answer:
        'Pure pipes improve performance by avoiding unnecessary recalculations.',
    },
    {
      question: 'Are Angular built-in pipes pure or impure?',
      answer:
        'Most built-in pipes are pure except AsyncPipe.',
    },
  ];
}
