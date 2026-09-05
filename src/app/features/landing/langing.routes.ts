import { Routes } from "@angular/router";

export const LandingRoutes: Routes = [
    {
        path: '',
        title: 'Monga Bus',
        loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    }
]