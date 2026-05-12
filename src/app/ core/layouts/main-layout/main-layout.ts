import { Component, signal } from '@angular/core';
import { NAV_ITEMS } from '../layout.config'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';


@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    Sidebar,
    Header,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
