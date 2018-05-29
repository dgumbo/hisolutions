import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute} from '@angular/router'; 
import {Audiance} from 'shared/models/audiance';
import {AudianceService} from 'shared/services/rest/audiance.service';
import {NotFoundError} from 'shared/components/error-pages/not-found-error';
import {AppError} from 'shared/components/error-pages/app-error';

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
            .take(1)
            .subscribe((aud:Audiance) => this.audiance = aud);
    }

    saveAudiance(audiance: Audiance) {
        console.log(JSON.stringify(audiance));

        if (this.isNewForm) { 
            this._audianceService.create(audiance)
                .subscribe(prod => {
                    document.location.assign("/audiances"); 
                })
                ;
        }
        else {
            this._audianceService.update(this.id, audiance)
                .subscribe(prod => {
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