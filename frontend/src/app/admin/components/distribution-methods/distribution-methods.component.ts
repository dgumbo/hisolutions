import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/errors/app-error';
import {NotFoundError } from 'shared/errors/not-found-error'; 
import {DistributionMethod} from 'shared/models/distribution-method';
import {DistributionMethodService} from 'admin/services/rest/distribution-method.service';

@Component({
  selector: 'app-distribution-methods',
  templateUrl: './distribution-methods.component.html',
  styleUrls: ['./distribution-methods.component.scss']
})
export class DistributionMethodsComponent implements OnInit {
     distributionMethods: DistributionMethod[]; 

    constructor(private _distributionMethodService: DistributionMethodService ) {}

    ngOnInit() {
        this.getDistributionMethods(); 
    } 

    getDistributionMethods  () {
        this._distributionMethodService.getAll()
        .subscribe((prods :DistributionMethod[])=> this.distributionMethods = prods);
    }

    deleteDistributionMethod(distributionMethod) {

        this._distributionMethodService.delete(distributionMethod)
            .subscribe( () => {
                const index = this.distributionMethods.indexOf(distributionMethod);
                this.distributionMethods.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('distributionMethod has already been deleted.');
                else throw error;
            }); 
    }

}
