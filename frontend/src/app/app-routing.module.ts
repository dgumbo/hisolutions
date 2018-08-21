import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';  
import {AuthGuard} from 'auth/guards';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
   
  {
    path: 'admin', 
    loadChildren: './admin/admin.module#AdminModule', 
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    redirectTo: '/auth/login',
    pathMatch: 'full',  
  },
  {
    path: 'logout',
    redirectTo: '/auth/logout',
    pathMatch: 'full',  
  },
  {
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'services', 
    loadChildren: './products-and-services/products-and-services.module#ProductsAndServicesModule'
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
