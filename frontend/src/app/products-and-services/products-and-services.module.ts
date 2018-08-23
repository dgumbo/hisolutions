import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'; 

import {ProductsAndServicesRoutingModule, productsAndServicesRoutedComponents, } from './products-and-services-routing.module';
 import {SharedModule} from 'shared/shared.module'; 
 
@NgModule({
    imports: [ 
        CommonModule,
        SharedModule ,
        ProductsAndServicesRoutingModule
    ],
    providers: [  
    ],
    declarations: [
        ...productsAndServicesRoutedComponents
    ]
})
export class ProductsAndServicesModule {}
