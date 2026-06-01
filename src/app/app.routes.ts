import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'keyboard-tierlist',
    loadComponent: () => import('./pages/keyboard-tierlist-page/keyboard-tierlist-page.component').then(m => m.KeyboardTierlistPageComponent)
  },
  {
    path: 'switch-tierlist',
    loadComponent: () => import('./pages/switch-tierlist-page/switch-tierlist-page.component').then(m => m.SwitchTierlistPageComponent)
  },
  {
    path: 'iem-tierlist',
    loadComponent: () => import('./pages/iem-tierlist-page/iem-tierlist-page.component').then(m => m.IemTierlistPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
