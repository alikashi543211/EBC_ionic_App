import { NgModule } from '@angular/core';
import { SearchReservationComponent } from './../search-reservation/search-reservation.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index.page';
export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
        {
            path: '',
            component: SearchReservationComponent
        }
    ]
  },
];


