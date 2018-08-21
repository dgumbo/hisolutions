import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {OurPortfolioComponent} from './components/our-portfolio/our-portfolio.component'; 

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'our-portfolio',
        component: OurPortfolioComponent
    },
    {
        path: 'contact-us',
        loadChildren: 'welcome/components/contact-us/contact-us.module#ContactUsModule'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WelcomeRoutingModule {}

export const welcomeModuleRoutedComponents = [
    LandingComponent,
    AboutUsComponent,
    OurPortfolioComponent,
];