import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module'; 
import {SharedGlobals} from './shared/shared-globals';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ], 
    providers: [
        SharedGlobals
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
