import { NgModule } from '@angular/core'; 
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {CoreRoutingModule} from './core-routing.module';
import {CoreGlobals} from './core-globals';
import {SharedModule} from '../shared/shared.module';
import {AboutUsComponent} from 'core/components/about-us/about-us.component';
import {ContactUsComponent} from 'core/components/contact-us/contact-us.component';
import {OurPortfolioComponent} from 'core/components/our-portfolio/our-portfolio.component';
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
        NavComponent,
        HomeComponent,
        FooterComponent,
        AboutUsComponent,
        ContactUsComponent,
        OurPortfolioComponent],
    providers: [
        CoreGlobals 
    ]
})
export class CoreModule { }
