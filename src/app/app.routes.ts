import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'monga-bus',pathMatch: 'full'},
    {
        path: 'monga-bus',
        loadChildren: () => import('./features/landing/langing.routes').then(r => r.LandingRoutes)
    }
];
