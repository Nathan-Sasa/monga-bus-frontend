import { Routes } from '@angular/router'
export const VolsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./page/vols-page/vols-page.component').then(m => m.VolsPageComponent)
    }
]