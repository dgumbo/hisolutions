import { Component, OnInit } from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router';
import {VendorService} from 'admin/services/rest/vendor.service';
import {AppError } from 'shared/errors/app-error';
import {NotFoundError } from 'shared/errors/not-found-error';
import {Vendor} from 'shared/models/vendor';
import {PreviousRouteService} from 'shared/services';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {
id: string;
    vendor: Vendor;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute,
    private router:  Router,
    private previousRoute  : PreviousRouteService
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
          //  .take(1)
            .subscribe((prod :Vendor)=> this.vendor = prod);
    }

    saveVendor(vendor: Vendor) {
        console.log(JSON.stringify(vendor));

        if (this.isNewForm) { 
            this._vendorService.create(vendor)
                .subscribe(prod => {
                    prod=prod;
                    //document.location.assign("../"); 
                    this.previousRoute.navigatePreviousUrl();
                })
                ;
        }
        else {
            this._vendorService.update(this.id, vendor)
                .subscribe(prod => {
                    prod=prod;
                     //document.location.assign("../"); 
                    this.previousRoute.navigatePreviousUrl();
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
    
    navBack(){
       // this.router.navigateByUrl(this.p);
    }
}
