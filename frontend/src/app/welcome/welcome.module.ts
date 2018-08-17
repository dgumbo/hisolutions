import {NgModule} from '@angular/core'; 
import {WelcomeRoutingModule, routedComponents} from './welcome-routing.module';
import {SharedModule} from 'shared/shared.module';  
import {SharedGlobals} from 'shared/shared-globals';

@NgModule({
    imports: [ 
        WelcomeRoutingModule,
        SharedModule,  
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [ 
        SharedGlobals 
    ],
})
export class WelcomeModule {
    
}
