import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule, routedComponents } from './contact-us-routing.module';
import {AgmCoreModule} from '@agm/core'; 

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,        
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCK9uTOkvOtp1bWTfN4mygW05roXfdDSys' 
    }) 
  ],
  declarations: [ ...routedComponents ]
})
export class ContactUsModule { }
