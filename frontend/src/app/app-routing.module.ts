import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
//import {AdminModule} from './admin/admin.module';
//import {WelcomeModule} from './welcome/welcome.module';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'admin', 
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
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
