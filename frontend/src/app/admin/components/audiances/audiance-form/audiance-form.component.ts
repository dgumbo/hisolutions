import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute} from '@angular/router'; 
import {Audiance} from 'shared/models/audiance';
//import {NotFoundError} from 'shared/errors/not-found-error';
//import {AppError} from 'shared/errors/app-error';
import {AudianceService} from 'admin/services/rest/audiance.service'; 
import {AppError} from 'shared/errors/app-error';
import {NotFoundError} from 'shared/errors/not-found-error';

@Component({
    selector: 'app-audiance-form',
    templateUrl: './audiance-form.component.html',
    styleUrls: ['./audiance-form.component.scss']
})

export class AudianceFormComponent implements OnInit {
    //SharedModule: SharedModule ;
    id: string;
    audiance: Audiance;

    isNewForm: boolean = false;

    constructor(private route: ActivatedRoute
        , private _audianceService: AudianceService) {


        this.id = this.route.snapshot.paramMap.get('id');
        this.audiance = {
            name: ""
        };

        if (this.id) {
            this.getAudiance(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getAudiance(audianceId) {
        this._audianceService.get(audianceId)
            //.take(1)
            .subscribe((aud:Audiance) => this.audiance = aud);
    }

    saveAudiance(audiance: Audiance) {
        console.log(JSON.stringify(audiance));

        if (this.isNewForm) { 
            this._audianceService.create(audiance)
                .subscribe(prod => {
                    prod=prod;
                    //console.log(prod) ;
                    document.location.assign("/audiances"); 
                })
                ;
        }
        else {
            this._audianceService.update(this.id, audiance)
                .subscribe(prod => {
                    prod=prod;
                     document.location.assign("/audiances"); 
                });
        }
    }

    deleteAudiance(audiance) {

        this._audianceService.delete(audiance)
            .subscribe(() => { 
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('audiance has already been deleted.');
                else throw error;
            });
    }
}