import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import {LocationStrategy, HashLocationStrategy} from '@angular/common';  
import {ProductViewComponent} from './product/component/view/product-view.component';
import {ServiceCategoryViewComponent} from './service-category/component/view/service-category-view.component';
//import {ProductViewComponent} from './components/product/product-view.component';
//import {ServiceCategoryViewComponent} from './components/service-category/service-category-view.component';

const mainRoutes: Routes = [ 

    /* Views */
    /* Product */
    {path: 'products/:name', component: ProductViewComponent},
    {path: 'services/:name', component: ServiceCategoryViewComponent},
 
 
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class SiteRoutingModule {}
