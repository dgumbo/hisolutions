import { Component, OnInit } from '@angular/core';
import {NotFoundError } from 'shared/components/error-pages/not-found-error';
import {AppError } from 'shared/components/error-pages/app-error';
import {PreRequisiteService} from 'shared/services/rest/pre-requisite.service';
import {PreRequisite} from 'shared/models/pre-requisite';

@Component({
  selector: 'app-pre-requisites',
  templateUrl: './pre-requisites.component.html',
  styleUrls: ['./pre-requisites.component.scss']
})
export class PreRequisitesComponent implements OnInit {

     preRequisites: PreRequisite[]; 

    constructor(private _preRequisiteService: PreRequisiteService ) {}

    ngOnInit() {
        this.getPreRequisites(); 
    } 

    getPreRequisites  () {
        this._preRequisiteService.getAll().subscribe((prods : PreRequisite[])=> this.preRequisites = prods);
    }

    deletePreRequisite(preRequisite) {

        this._preRequisiteService.delete(preRequisite)
            .subscribe( () => {
                const index = this.preRequisites.indexOf(preRequisite);
                this.preRequisites.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('preRequisite has already been deleted.');
                else throw error;
            }); 
    }

}
