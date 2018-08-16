import { Component, OnInit } from '@angular/core';
import {SharedGlobals} from 'src/app/shared/shared-globals';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    production: boolean ;

    constructor(globals: SharedGlobals) {
        this.production = globals.production;
    }

    ngOnInit() {
    }

}
