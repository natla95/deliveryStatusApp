import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { CourierLunchspotsComponent } from './courier-lunchspots/courier-lunchspots.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'orders', component: CourierLunchspotsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
   exports: [RouterModule]
})

export class AppRoutingModule {}
