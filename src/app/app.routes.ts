import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'monga-bus',
        title: 'Monga Bus Travel',
        loadComponent: () => import('./features/landing/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
        // loadChildren: () => import('./features/landing/langing.routes').then(r => r.LandingRoutes)
    },
    {
        path: 'vols',
        loadChildren: () => import('./features/vols/vols.routes').then(r => r.VolsRoutes)
    },
    
    { path: '', redirectTo: 'monga-bus',pathMatch: 'full'},
    {path: '**', redirectTo: 'monga-bus', pathMatch: 'full'}
];
