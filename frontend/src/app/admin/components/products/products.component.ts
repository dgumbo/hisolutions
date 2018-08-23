import {Component, OnInit} from '@angular/core';
import {Product} from 'shared/models/product';
import {AppError} from 'shared/errors/app-error';
import {NotFoundError} from 'shared/errors/not-found-error';
import {ProductService} from 'admin/services/rest/product.service';
import {environment} from 'environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    products: Product[];

    constructor(private _productService: ProductService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this._productService.getAll().subscribe((prods: Product[]) => {
            this.products = prods;
            if (environment.production == false) {
                for (let product of this.products) {
                    product.imageUrl = environment.apiUrl + product.imageUrl;
                }
            }
        });
    }

    deleteProduct(product) {

        this._productService.delete(product)
            .subscribe(() => {
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
