import { Component, OnInit } from '@angular/core';
import {Globals} from 'app/globals';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    production: boolean ;

    constructor(globals: Globals) {
        this.production = globals.production;
    }

    ngOnInit() {
    }

}
