import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from 'admin/services/rest/product-type.service';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {ProductType} from 'shared/models/product-type';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent implements OnInit {
     productTypes: ProductType[]; 

    constructor(private _productTypeService: ProductTypeService ) {}

    ngOnInit() {
        this.getProductTypes(); 
    } 

    getProductTypes  () {
        this._productTypeService.getAll()
        .subscribe((prods :ProductType[])=> this.productTypes = prods);
    }

    deleteProductType(productType) {

        this._productTypeService.delete(productType)
            .subscribe( () => {
                const index = this.productTypes.indexOf(productType);
                this.productTypes.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('productType has already been deleted.');
                else throw error;
            }); 
    }

}
