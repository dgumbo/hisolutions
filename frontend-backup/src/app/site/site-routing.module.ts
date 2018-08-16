import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';   
import {ProductViewComponent} from './product/component/view/product-view.component';
import {ServiceCategoryViewComponent} from './service-category/component/view/service-category-view.component'; 

const mainRoutes: Routes = [ 

    /* Views */
    /* Product */
    {path: 'products/:name', component: ProductViewComponent},
    {path: 'services/:name', component: ServiceCategoryViewComponent},
 
 
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule], 
})

export class SiteRoutingModule {}
