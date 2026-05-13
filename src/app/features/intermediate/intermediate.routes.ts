import { Routes } from '@angular/router';

export const INTERMEDIATE_ROUTES: Routes = [
    {
        path: 'change-detection',
        loadComponent: () =>
            import('./change-detection-page/change-detection-page').then(
                (m) => m.ChangeDetectionPage
            ),
    },
    {
        path: 'signals',
        loadComponent: () =>
            import('./signals-page/signals-page').then(
                (m) => m.SignalsPage
            ),
    },
    {
        path: 'guards',
        loadComponent: () =>
            import('./guards-page/guards-page').then(
                (m) => m.GuardsPage
            ),
    },
    {
        path: 'http-client',
        loadComponent: () =>
            import('./http-client-page/http-client-page').then(
                (m) => m.HttpClientPage
            ),
    },
    {
        path: 'interceptors',
        loadComponent: () =>
            import('./interceptors-page/interceptors-page').then(
                (m) => m.InterceptorsPage
            ),
    },
    {
        path: 'resolvers',
        loadComponent: () =>
            import('./resolvers-page/resolvers-page').then(
                (m) => m.ResolversPage
            ),
    }
];