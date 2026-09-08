import { Routes } from '@angular/router'
export const VolsRoutes: Routes = [
    {
        path: '',
        title: 'vols',
        loadComponent: () => import('./page/vols-page/vols-page.component').then(m => m.VolsPageComponent)
    }
]