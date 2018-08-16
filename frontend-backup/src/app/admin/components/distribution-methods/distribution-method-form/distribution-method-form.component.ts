import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DistributionMethodService} from 'shared/services/rest/distribution-method.service';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {AppError } from 'shared/components/error-pages/app-error';
import {DistributionMethod} from 'shared/models/distribution-method';

@Component({
    selector: 'app-distribution-method-form',
    templateUrl: './distribution-method-form.component.html',
    styleUrls: ['./distribution-method-form.component.scss']
})
export class DistributionMethodFormComponent implements OnInit {
    id: string;
    distributionMethod: DistributionMethod;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _distributionMethodService: DistributionMethodService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.distributionMethod = {
            name: ""
        };

        if (this.id) {
            this.getDistributionMethod(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getDistributionMethod(distributionMethodId) {
        this._distributionMethodService.get(distributionMethodId)
            .take(1)
            .subscribe((prod:DistributionMethod) => this.distributionMethod = prod);
    }

    saveDistributionMethod(distributionMethod: DistributionMethod) {
        console.log(JSON.stringify(distributionMethod));

        if (this.isNewForm) {
            this._distributionMethodService.create(distributionMethod)
                .subscribe(prod => {
                    prod=prod;
                    document.location.assign("/distributionmethods");
                })
                ;
        }
        else {
            this._distributionMethodService.update(this.id, distributionMethod)
                .subscribe(prod => {
                    prod=prod;
                    document.location.assign("/distributionmethods");
                });
        }
    }

    deleteDistributionMethod(distributionMethod) {

        this._distributionMethodService.delete(distributionMethod)
            .subscribe(() => {
            },
                (error: AppError) => {
                    if (error instanceof NotFoundError)
                        alert('distributionMethod has already been deleted.');
                    else throw error;
                });
    }
}
