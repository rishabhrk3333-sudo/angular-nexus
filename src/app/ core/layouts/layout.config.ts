export interface NavItem {
  label: string;
  icon: string;
  route: string;
  color: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
    color: 'text-blue-400',
  },
  {
    label: 'Basics',
    icon: 'school',
    route: '/basics',
    color: 'text-green-400',
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