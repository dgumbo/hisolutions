import {NgModule} from '@angular/core'; 
import {WelcomeRoutingModule, routedComponents} from './welcome-routing.module';
import {SharedModule} from '../shared/shared.module';  

@NgModule({
    imports: [ 
        WelcomeRoutingModule,
        SharedModule,  
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [
    ],
})
export class WelcomeModule {}
