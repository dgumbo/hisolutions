import {Component, OnInit, Input} from '@angular/core';
import {CoreGlobals} from '../../core-globals';
import {ServiceCategory} from 'shared/models/service-category';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 
    serviceCategories: ServiceCategory[];   
    production: boolean = this.globals.production ;  
    
    //@Input('headerbackground') headerbackground: boolean; //= true;  
    
    constructor(public globals: CoreGlobals) { }

    ngOnInit() {}

}
