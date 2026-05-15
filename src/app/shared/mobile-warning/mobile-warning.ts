import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-mobile-warning',
  imports: [CommonModule],
  templateUrl: './mobile-warning.html',
  styleUrl: './mobile-warning.css',
})
export class MobileWarning {
  isMobile = signal(false);

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen(): void {
    this.isMobile.set(window.innerWidth < 1024);
  }
}