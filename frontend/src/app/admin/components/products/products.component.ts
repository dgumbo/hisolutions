import {Component, OnInit} from '@angular/core'; 
import {Product} from 'shared/models/product'; 
import {AppError} from 'shared/components/error-pages/app-error';
import {NotFoundError} from 'shared/components/error-pages/not-found-error';
import {ProductService} from 'admin/services/rest/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    products: Product[]; 

    constructor(private _productService: ProductService ) {}

    ngOnInit() {
        this.getProducts(); 
    } 

    getProducts  () {
        this._productService.getAll().subscribe((prods :Product[])=> this.products = prods);
    }

    deleteProduct(product) {

        this._productService.delete(product)
            .subscribe( () => {
                const index = this.products.indexOf(product);
                this.products.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('product has already been deleted.');
                else throw error;
            }); 
    }
}
