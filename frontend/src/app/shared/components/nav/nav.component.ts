import {Component, OnInit} from '@angular/core';
import {SharedGlobals} from '../../shared-globals';

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    constructor(public globals: SharedGlobals) {}
    ngOnInit() { }
}
