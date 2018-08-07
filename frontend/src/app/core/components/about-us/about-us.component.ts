import { Component, OnInit, OnDestroy } from '@angular/core'; 
import {CoreGlobals} from '../../core-globals';

declare var $: any
declare var WOW: any

@Component({
  selector: 'app-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  
    production: boolean = false;
  
  constructor(private globals : CoreGlobals) {
      this.production = globals.production;
       } 

    ngOnDestroy(): void { 
        $('.nav-container').removeClass('nav-container-bg'); 
    }

    ngOnInit() { 
        $('.nav-container').addClass('nav-container-bg');   
    }

}
