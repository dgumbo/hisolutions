import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/errors/app-error';
import {NotFoundError } from 'shared/errors/not-found-error';
import {ActivatedRoute} from '@angular/router';
import {ProductTypeService} from 'admin/services/rest/product-type.service';
import {ProductType} from 'shared/models/product-type';

@Component({
  selector: 'app-product-type-form',
  templateUrl: './product-type-form.component.html',
  styleUrls: ['./product-type-form.component.scss']
})
export class ProductTypeFormComponent implements OnInit {
   productTypes: any;
    isNewForm: boolean;
    id: string;
    productType: ProductType;
    
    getProductType(arg0: any): any {
        arg0=arg0;
        throw new Error("Method not implemented.");
    }

 constructor(private route: ActivatedRoute 
        , private _productTypeService: ProductTypeService ) {
 
        this.id = this.route.snapshot.paramMap.get('id');
        this.productType = {
            id: 0,
            name: ""
        };

        if (this.id) {
            this.getProductType(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    } 

    getProductTypes() {
        this._productTypeService.getAll()
            .subscribe(prodtypes => this.productTypes = prodtypes);
    } 

    saveProductType(productType: ProductType) {
            console.log(JSON.stringify(productType));
            
        if (this.isNewForm) { 
            this._productTypeService.create(productType)
                .subscribe(() => { 
                    document.location.assign("/producttypes"); 
                }) 
                ;
        }
        else {
            this._productTypeService.update(this.id, productType)
                .subscribe(() => {   
                    document.location.assign("/producttypes");
                     
                });
        }
    }

    delete(productType) { 
        this._productTypeService.delete(productType)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('productType has already been deleted.');
                else throw error;
            });
    }

}
