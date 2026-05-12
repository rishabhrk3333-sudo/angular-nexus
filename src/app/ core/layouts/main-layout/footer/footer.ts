import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule,
    MatButtonModule,],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  technologies = [
    'Angular 21',
    'Tailwind CSS',
    'Angular Material',
    'TypeScript',
  ];

  socialLinks = [
    {
      name: 'GitHub',
      icon: 'code',
      url: 'https://github.com/rishabhrk3333-sudo',
    },
    {
      name: 'LinkedIn',
      icon: 'work',
      url: 'https://www.linkedin.com/in/rishabh-kumar-05b63b190/',
    },
  ];
}
