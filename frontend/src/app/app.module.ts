import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';    
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [ 
    BrowserModule,
    CommonModule,
    AppRoutingModule, 
    SharedModule, 
    RouterModule ,
  ], 
    providers: [    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
