import { Routes } from '@angular/router';
import { LayoutComp } from './module/layout/LayoutComp';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComp,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./module/home/HomeComp').then(m => m.HomeComp)
      }



    ]
  }
];
