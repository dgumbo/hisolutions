import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module'; 
  
import {SiteModule} from './site/site.module'; 
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module'; 
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent 
    ],
    imports: [
        CoreModule,
        SharedModule, 
        BrowserModule, 
        AppRoutingModule
        
        , AuthModule
        , SiteModule
        , AdminModule
    ],
    providers: [ ],
    
    bootstrap: [AppComponent]
})
export class AppModule {}
