import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LearningCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly cards: LearningCard[] = [
    {
      title: 'Angular Basics',
      description:
        'Components, templates, directives, pipes, dependency injection and routing.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Intermediate Angular',
      description:
        'RxJS, HTTP client, guards, lazy loading and advanced forms.',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Advanced Angular',
      description:
        'Signals, zoneless apps, SSR, hydration and performance optimization.',
      icon: '🔥',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Angular Labs',
      description:
        'Interactive playgrounds and visual learning experiments.',
      icon: '🧪',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Angular Future',
      description:
        'Upcoming Angular features, roadmap and experimental APIs.',
      icon: '🔮',
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'Angular Material',
      description:
        'Enterprise-grade UI components and modern design systems.',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  redirectTo(pageName:string){

  }
}
