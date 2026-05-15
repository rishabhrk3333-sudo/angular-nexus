import { Routes } from '@angular/router';
import { MainLayout } from './ core/layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/components/dashboard/dashboard').then(
                        (m) => m.Dashboard
                    ),
            },
            {
                path: 'basics',
                loadChildren: () =>
                    import('./features/basics/basics.routes').then(
                        (m) => m.BASICS_ROUTES
                    ),
            },
            {
                path: 'intermediate',
                loadChildren: () =>
                    import('./features/intermediate/intermediate.routes').then(
                        (m) => m.INTERMEDIATE_ROUTES
                    ),
            },
            {
                path: 'advanced',
                loadChildren: () =>
                    import('./features/advanced/advanced.routes').then(
                        (m) => m.ADVANCED_ROUTES
                    )
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
];