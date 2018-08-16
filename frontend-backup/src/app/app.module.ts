import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';  
import {CoreModule} from './core/core.module'; 

@NgModule({
    declarations: [
        AppComponent 
    ],
    imports: [
        CoreModule,
        //AuthModule,
        //SiteModule,
        //AdminModule,
        
        //SharedModule, 
        //BrowserModule, 
        AppRoutingModule,        
    ],
    providers: [ ],
    
    bootstrap: [AppComponent]
})
export class AppModule {}
