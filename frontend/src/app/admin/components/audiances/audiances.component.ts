import { Component, OnInit } from '@angular/core';
import {AppError } from 'shared/components/error-pages/app-error';
import {NotFoundError } from 'shared/components/error-pages/not-found-error'; 
import {Audiance} from 'shared/models/audiance';
import {AudianceService} from 'admin/services/rest/audiance.service';

@Component({
  selector: 'app-audiances',
  templateUrl: './audiances.component.html',
  styleUrls: ['./audiances.component.scss']
})
export class AudiancesComponent implements OnInit {

     audiances: Audiance[]; 

    constructor(private _audianceService: AudianceService ) {}

    ngOnInit() {
        this.getAudiances(); 
    } 

    getAudiances  () {
        this._audianceService.getAll().subscribe((prods: Audiance[])=> this.audiances = prods);
    }

    deleteAudiance(audiance) {

        this._audianceService.delete(audiance)
            .subscribe( () => {
                const index = this.audiances.indexOf(audiance);
                this.audiances.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('audiance has already been deleted.');
                else throw error;
            }); 
    }

}
