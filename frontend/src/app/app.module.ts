import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'; 
import {Globals} from 'app/globals';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        SharedModule,
        RouterModule,

    ],
    providers: [ 
        Globals, 
//        {
//            provide: HTTP_INTERCEPTORS,
//            useClass: JwtInterceptor,
//            multi: true
//        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
