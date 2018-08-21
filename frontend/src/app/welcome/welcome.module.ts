import {NgModule} from '@angular/core'; 
import {WelcomeRoutingModule, welcomeModuleRoutedComponents} from './welcome-routing.module';
import {SharedModule} from 'shared/shared.module';  
import {Globals} from 'app/globals';

@NgModule({
    imports: [ 
        WelcomeRoutingModule,
        SharedModule,  
    ],
    declarations: [
        ...welcomeModuleRoutedComponents
    ],
    providers: [ 
        Globals 
    ],
})
export class WelcomeModule {
    
}
