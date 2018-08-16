import {Component, OnInit} from '@angular/core';
import {CoreGlobals} from '../../core-globals';

@Component({
    selector: 'app-about-us',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutUsComponent implements OnInit {

    production: boolean ;

    constructor(globals: CoreGlobals) {
        this.production = globals.production;
    }

    ngOnInit() {
    }

}
