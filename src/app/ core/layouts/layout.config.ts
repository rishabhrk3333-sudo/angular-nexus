export interface NavItem {
  label: string;
  icon: string;
  route?: string;
  color: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
    color: 'text-cyan-400',
  },

  {
    label: 'Basics',
    icon: 'school',
    color: 'text-green-400',
    children: [
      {
        label: 'Components',
        icon: 'widgets',
        route: '/basics/components',
        color: 'text-blue-400',
      },
      {
        label: 'Templates',
        icon: 'code',
        route: '/basics/templates',
        color: 'text-purple-400',
      },
      {
        label: 'Data Binding',
        icon: 'sync_alt',
        route: '/basics/data-binding',
        color: 'text-pink-400',
      },
      {
        label: 'Directives',
        icon: 'view_compact',
        route: '/basics/directives',
        color: 'text-orange-400',
      },
      {
        label: 'Pipes',
        icon: 'filter_alt',
        route: '/basics/pipes',
        color: 'text-cyan-400',
      },
      {
        label: 'Services',
        icon: 'miscellaneous_services',
        route: '/basics/services',
        color: 'text-yellow-400',
      },
      {
        label: 'Dependency Injection',
        icon: 'account_tree',
        route: '/basics/dependency-injection',
        color: 'text-red-400',
      },
      {
        label: 'Routing',
        icon: 'alt_route',
        route: '/basics/routing',
        color: 'text-emerald-400',
      },
      {
        label: 'Forms',
        icon: 'dynamic_form',
        route: '/basics/forms',
        color: 'text-fuchsia-400',
      },
    ],
  },
  {
    label: 'Intermediate',
    icon: 'auto_graph',
    route: '/intermediate',
    color: 'text-cyan-400',
  },
  {
    label: 'Advanced',
    icon: 'rocket_launch',
    route: '/advanced',
    color: 'text-red-400',
  },
  {
    label: 'Angular Labs',
    icon: 'science',
    route: '/labs',
    color: 'text-purple-400',
  },
  {
    label: 'Angular Future',
    icon: 'psychology',
    route: '/future',
    color: 'text-pink-400',
  },
];