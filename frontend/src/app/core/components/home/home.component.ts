import {Component, OnInit} from '@angular/core';
import {CoreGlobals} from '../../core-globals'; 


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

    constructor(public globals: CoreGlobals) {
    } 

    ngOnInit() { 

    }

}
