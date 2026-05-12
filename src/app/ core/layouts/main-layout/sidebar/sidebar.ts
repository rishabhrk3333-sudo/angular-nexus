import { Component, signal } from '@angular/core';
import { NAV_ITEMS, NavItem } from '../../layout.config';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly navItems = NAV_ITEMS;

  readonly sidebarCollapsed = signal(false);

  readonly expandedMenus = signal<string[]>(['Basics']);

  toggleSidebar(): void {
    this.sidebarCollapsed.update((value) => !value);
  }

  toggleMenu(label: string): void {
    this.expandedMenus.update((menus) => {
      if (menus.includes(label)) {
        return menus.filter((menu) => menu !== label);
      }

      return [...menus, label];
    });
  }

  isExpanded(label: string): boolean {
    return this.expandedMenus().includes(label);
  }

  hasChildren(item: NavItem): boolean {
    return !!item.children?.length;
  }
}
