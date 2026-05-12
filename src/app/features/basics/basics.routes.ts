import { Routes } from '@angular/router';

export const BASICS_ROUTES: Routes = [
    {
        path: 'components',
        loadComponent: () =>
            import('./components-page/components-page').then(
                (m) => m.ComponentsPage
            ),
    },
    {
        path: 'templates',
        loadComponent: () =>
            import('./templates-page/templates-page').then(
                (m) => m.TemplatesPage
            ),
    },
    {
        path: 'data-binding',
        loadComponent: () =>
            import('./data-binding-page/data-binding-page').then(
                (m) => m.DataBindingPage
            ),
    },
    {
        path: 'directives',
        loadComponent: () =>
            import('./directives-page/directives-page').then(
                (m) => m.DirectivesPage
            ),
    },
    {
        path: 'pipes',
        loadComponent: () =>
            import('./pipes-page/pipes-page').then(
                (m) => m.PipesPage
            ),
    },
    {
        path: 'services',
        loadComponent: () =>
            import('./services-page/services-page').then(
                (m) => m.ServicesPage
            ),
    },
    {
        path: 'dependency-injection',
        loadComponent: () =>
            import(
                './dependency-injection-page/dependency-injection-page'
            ).then((m) => m.DependencyInjectionPage),
    },
    {
        path: 'routing',
        loadComponent: () =>
            import('./routing-page/routing-page').then(
                (m) => m.RoutingPage
            ),
    },
    {
        path: 'forms',
        loadComponent: () =>
            import('./forms-page/forms-page').then(
                (m) => m.FormsPage
            ),
    },
];