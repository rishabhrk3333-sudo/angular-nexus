export interface NavItem {
  label: string;
  icon: string;
  route?: string;
  color?: string;
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
    children: [
      {
        label: 'Change Detection',
        icon: 'sync_alt',
        route: '/intermediate/change-detection',
        color: 'text-orange-300',
      },
      {
        label: 'Signals',
        icon: 'bolt',
        route: '/intermediate/signals',
        color: 'text-pink-300',
      },
      {
        label: 'HTTP Client',
        icon: 'cloud_download',
        route: '/intermediate/http-client',
        color: 'text-sky-300',
      },
      {
        label: 'Guards',
        icon: 'security',
        route: '/intermediate/guards',
        color: 'text-red-300',
      },
      {
        label: 'Resolvers',
        icon: 'route',
        route: '/intermediate/resolvers',
        color: 'text-indigo-300',
      },
      {
        label: 'Interceptors',
        icon: 'filter_alt',
        route: '/intermediate/interceptors',
        color: 'text-amber-300',
      },
      // {
      //   label: 'Content Projection',
      //   icon: 'flip_to_front',
      //   route: '/intermediate/content-projection',
      //   color: 'text-fuchsia-300',
      // },
      // {
      //   label: 'HostBinding & HostListener',
      //   icon: 'ads_click',
      //   route: '/intermediate/host-binding',
      //   color: 'text-rose-300',
      // },
      // {
      //   label: 'Reusable UI Patterns',
      //   icon: 'dashboard_customize',
      //   route: '/intermediate/reusable-patterns',
      //   color: 'text-violet-300',
      // }
    ]
  },
  {
    label: 'Advanced',
    icon: 'rocket_launch',
    route: '/advanced',
    color: 'text-red-400',
    children: [
      {
        label: 'Change Detection',
        route: '/advanced/change-detection',
        icon: 'sync',
        color: 'text-blue-400',
      },
      // {
      //   label: 'Standalone APIs',
      //   route: '/advanced/standalone-apis',
      //   icon: 'api',
      //   color: 'text-fuchsia-400',
      // },
      // {
      //   label: 'Zone.js & NgZone',
      //   route: '/advanced/ng-zone',
      //   icon: 'blur_on',
      //   color: 'text-red-400',
      // },
      // {
      //   label: 'Performance Optimization',
      //   route: '/advanced/performance-optimization',
      //   icon: 'speed',
      //   color: 'text-blue-400',
      // },
      // {
      //   label: 'Custom Renderers',
      //   route: '/advanced/renderer',
      //   icon: 'brush',
      //   color: 'text-blue-400',
      // },
      // {
      //   label: 'Micro Frontends',
      //   route: '/advanced/micro-frontends',
      //   icon: 'lan',
      //   color: 'text-blue-400',
      // },
      // {
      //   label: 'SSR & Hydration',
      //   route: '/advanced/ssr',
      //   icon: 'dns',
      //   color: 'text-blue-400',
      // },
      // {
      //   label: 'Web Workers',
      //   route: '/advanced/web-workers',
      //   icon: 'memory',
      //   color: 'text-blue-400',
      // },
      {
        label: 'Angular Compiler',
        route: '/advanced/compilers',
        icon: 'terminal',
        color: 'text-blue-400',
      },
      // {
      //   label: 'Security Best Practices',
      //   route: '/advanced/security',
      //   icon: 'shield',
      //   color: 'text-blue-400',
      // },
    ],
  }
  // {
  //   label: 'Angular Labs',
  //   icon: 'science',
  //   route: '/labs',
  //   color: 'text-purple-400',
  // },
  // {
  //   label: 'Angular Future',
  //   icon: 'psychology',
  //   route: '/future',
  //   color: 'text-pink-400',
  // },
];