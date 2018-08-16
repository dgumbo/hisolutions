import {Component, OnInit } from '@angular/core';
import {CoreGlobals} from '../../core-globals';
import {ServiceCategory} from 'shared/models/service-category';

declare var $: any
declare var WOW: any

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
    
//
//    ngOnDestroy(): void {
//        $('.nav-container').addClass('nav-container-fixed');
//        $('.nav-container').removeClass('nav-container-scrolled'); 
//        $('.nav-container').removeClass('nav-container-bg'); 
//    }

    ngOnInit() {
        $('.nav-container').addClass('nav-container-fixed');
        $('.nav-container').removeClass('nav-container-scrolled');

        // Header fixed and Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { 
                $('.nav-container').addClass('nav-container-scrolled');
                $('.nav-container').removeClass('nav-container-fixed');
            } else { 
                $('.nav-container').removeClass('nav-container-scrolled');
                $('.nav-container').addClass('nav-container-fixed');
            }
        });

        // Initiate the wowjs
        new WOW().init();

        // Initiate superfish on nav menu
        $('.nav-container').superfish({
            animation: {opacity: 'show'},
            speed: 400
        });
    }

}
