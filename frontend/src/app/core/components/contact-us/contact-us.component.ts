import {Component, OnInit, OnDestroy} from '@angular/core';
import {ScriptService} from 'shared/services/script.service'; 

declare var $: any
declare var WOW: any
//declare var require: any

import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ScriptService]
})
export class ContactUsComponent implements OnInit , OnDestroy{
    lat: number = -17.818358;
    lng: number = 31.049104;
    markerLat: number = -17.818358;
    markerLng: number = 31.049104;
    zoom: number = 13;

    constructor() {}

    ngOnDestroy(): void { 
        $('.nav-container').removeClass('nav-container-bg'); 
    }

    ngOnInit() { 
        $('.nav-container').addClass('nav-container-bg');   
    }
}
