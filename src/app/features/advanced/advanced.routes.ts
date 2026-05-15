import { Routes } from '@angular/router';

export const ADVANCED_ROUTES: Routes = [
    {
        path: 'compilers',
        loadComponent: () =>
            import('./angular-copiler-page/angular-copiler-page').then(
                (m) => m.AngularCopilerPage
            ),
    },
    {
        path: 'renderer',
        loadComponent: () =>
            import('./custom-renderers-page/custom-renderers-page').then(
                (m) => m.CustomRenderersPage
            ),
    },
    {
        path: 'micro-frontends',
        loadComponent: () =>
            import('./micro-fe-page/micro-fe-page').then(
                (m) => m.MicroFePage
            ),
    },
    {
        path: 'ng-zone',
        loadComponent: () =>
            import('./ng-zone-page/ng-zone-page').then(
                (m) => m.NgZonePage
            ),
    },
    {
        path: 'performance-optimization',
        loadComponent: () =>
            import('./performance-optimization-page/performance-optimization-page').then(
                (m) => m.PerformanceOptimizationPage
            ),
    },
    {
        path: 'ssr',
        loadComponent: () =>
            import(
                './ssr-and-hydration-page/ssr-and-hydration-page'
            ).then((m) => m.SsrAndHydrationPage),
    },
    {
        path: 'standalone-apis',
        loadComponent: () =>
            import('./standalone-apis-page/standalone-apis-page').then(
                (m) => m.StandaloneApisPage
            ),
    },
    {
        path: 'web-workers',
        loadComponent: () =>
            import('./web-workers-page/web-workers-page').then(
                (m) => m.WebWorkersPage
            ),
    },
];