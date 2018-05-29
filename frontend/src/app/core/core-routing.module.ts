import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import {LocationStrategy, HashLocationStrategy} from '@angular/common';  
import {HomeComponent} from './components/home/home.component'; 
import {AboutUsComponent} from 'core/components/about-us/about-us.component';
import {ContactUsComponent} from 'core/components/contact-us/contact-us.component';
import {OurPortfolioComponent} from 'core/components/our-portfolio/our-portfolio.component';

const coreRoutes: Routes = [  
 
    /* Home Page */ 
    {path: '', component: HomeComponent} ,
    
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'our-portfolio', component: OurPortfolioComponent}
 
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class CoreRoutingModule {}
