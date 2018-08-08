import { Component, OnInit } from '@angular/core'; 
import {CoreGlobals} from '../../core-globals';

declare var $: any
declare var WOW: any

@Component({
  selector: 'app-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutUsComponent implements OnInit {
  
    production: boolean = false;
  
  constructor(private globals : CoreGlobals) {
      this.production = globals.production;
       }  

    ngOnInit() {   
    }

}
