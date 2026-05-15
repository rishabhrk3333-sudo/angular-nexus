import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileWarning } from './shared/mobile-warning/mobile-warning';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MobileWarning],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-learning-hub');
}
