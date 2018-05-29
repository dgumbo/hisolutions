import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error'; 
import {VendorService} from 'shared/services/rest/vendor.service'; 
import {Vendor} from 'shared/models/vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

     vendors: Vendor[]; 

    constructor(private _vendorService: VendorService ) {}

    ngOnInit() {
        this.getVendors(); 
    } 

    getVendors  () {
        this._vendorService.getAll().subscribe((prods:Vendor[]) => this.vendors = prods);
    }

    deleteVendor(vendor) {

        this._vendorService.delete(vendor)
            .subscribe( () => {
                const index = this.vendors.indexOf(vendor);
                this.vendors.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('vendor has already been deleted.');
                else throw error;
            }); 
    }

}
