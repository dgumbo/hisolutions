import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceCategoriesComponent} from 'products-and-services/components/service-categories/service-categories.component';
import {ProductsComponent} from 'products-and-services/components/products/products.component';

const routes: Routes = [ 
    /* Views */ 
    {path: 'product/:name', component: ProductsComponent},
    {path: 'service/:name', component: ServiceCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsAndServicesRoutingModule { }


export const productsAndServicesRoutedComponents = [
    ServiceCategoriesComponent,
    ProductsComponent,
];
