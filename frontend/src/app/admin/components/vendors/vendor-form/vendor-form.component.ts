import { Component, OnInit } from '@angular/core'; 
import {ActivatedRoute} from '@angular/router';
import {VendorService} from 'shared/services/rest/vendor.service';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {Vendor} from 'shared/models/vendor';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {
id: string;
    vendor: Vendor;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _vendorService: VendorService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.vendor = {
            name: ""
        };

        if (this.id) {
            this.getVendor(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getVendor(vendorId) {
        this._vendorService.get(vendorId)
            .take(1)
            .subscribe((prod :Vendor)=> this.vendor = prod);
    }

    saveVendor(vendor: Vendor) {
        console.log(JSON.stringify(vendor));

        if (this.isNewForm) { 
            this._vendorService.create(vendor)
                .subscribe(prod => {
                    document.location.assign("/vendors"); 
                })
                ;
        }
        else {
            this._vendorService.update(this.id, vendor)
                .subscribe(prod => {
                     document.location.assign("/vendors"); 
                });
        }
    }

    deleteVendor(vendor) {

        this._vendorService.delete(vendor)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('vendor has already been deleted.');
                else throw error;
            });
    }
}
