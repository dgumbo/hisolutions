import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {ActivatedRoute} from '@angular/router';
import {PreRequisiteService} from 'shared/services/rest/pre-requisite.service';
import {PreRequisite} from 'shared/models/pre-requisite';

@Component({
  selector: 'app-pre-requisite-form',
  templateUrl: './pre-requisite-form.component.html',
  styleUrls: ['./pre-requisite-form.component.scss']
})
export class PreRequisiteFormComponent implements OnInit {
id: string;
    preRequisite: PreRequisite;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _preRequisiteService: PreRequisiteService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.preRequisite = {
            name: ""
        };

        if (this.id) {
            this.getPreRequisite(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getPreRequisite(preRequisiteId) {
        this._preRequisiteService.get(preRequisiteId)
            .take(1)
            .subscribe((prod:PreRequisite) => this.preRequisite = prod);
    }

    savePreRequisite(preRequisite: PreRequisite) {
        console.log(JSON.stringify(preRequisite));

        if (this.isNewForm) { 
            this._preRequisiteService.create(preRequisite)
                .subscribe(prod => {
                    document.location.assign("/prerequisites"); 
                })
                ;
        }
        else {
            this._preRequisiteService.update(this.id, preRequisite)
                .subscribe(prod => {
                     document.location.assign("/prerequisites"); 
                });
        }
    }

    deletePreRequisite(preRequisite) {

        this._preRequisiteService.delete(preRequisite)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('preRequisite has already been deleted.');
                else throw error;
            });
    }

}
