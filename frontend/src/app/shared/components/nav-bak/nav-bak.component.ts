import {Component, OnInit} from '@angular/core';
import {SharedGlobals} from 'shared/shared-globals';

@Component({
    selector: 'app-nav-bak',
    templateUrl: './nav-bak.component.html',
    styleUrls: ['./nav-bak.component.scss']
})
export class NavBakComponent implements OnInit {
    constructor(public globals: SharedGlobals) {}
    ngOnInit() {}
}
