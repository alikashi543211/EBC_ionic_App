import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'search-reservation',
    component: SearchReservationComponent
  },
  {
    path: 'header',
    loadComponent: () => import('./pages/header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'user-detail',
    loadComponent: () => import('./user-detail/user-detail.page').then( m => m.UserDetailPage)
  },
  {
    path: 'animals',
    loadComponent: () => import('./animals/animals.page').then( m => m.AnimalsPage)
  },
];
