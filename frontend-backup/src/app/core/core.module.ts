import { NgModule } from '@angular/core'; 
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component'; 
import {CoreRoutingModule, coreRoutedComponents} from './core-routing.module';
import {CoreGlobals} from './core-globals';
import {SharedModule} from '../shared/shared.module'; 
import { AgmCoreModule } from '@agm/core'; 

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCK9uTOkvOtp1bWTfN4mygW05roXfdDSys' 
    })
  ],
  exports: [NavComponent, FooterComponent],
  
  declarations: [
        ...coreRoutedComponents,
        ],
    providers: [
        CoreGlobals 
    ]
})
export class CoreModule { }
