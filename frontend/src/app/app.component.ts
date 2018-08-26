import {Component, OnInit, OnDestroy} from '@angular/core';
import {ScrollToTopService} from 'shared/services';
import {Router, NavigationEnd} from '@angular/router';
import {LocationStrategy} from '@angular/common';

declare var $: any
declare var WOW: any

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[ScrollToTopService]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Heritage Innovative Solutions';


    isPopState = false;

    constructor(private router: Router
        , private locStrat: LocationStrategy) {}

    ngOnDestroy(): void {
        // Unbind Scroll Event
        $(window).unbind("scroll");
    }

    ngOnInit() {
        // Header fixed and Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
                $('.nav-container').addClass('nav-container-scrolled');
            } else {
                $('.back-to-top').fadeOut('slow');
                $('.nav-container').removeClass('nav-container-scrolled');
            }
        });

        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

        // Initiate the wowjs
        new WOW().init();

        /* Configures Page Location To Scroll To Top on route Change */
//        this.locStrat.onPopState(() => {
//            this.isPopState = true;
//        });
//
//        this.router.events.subscribe(event => {
//            // Scroll to top if accessing a page, not via browser history stack
//            if (event instanceof NavigationEnd && !this.isPopState) {
//                window.scrollTo(0, 0);
//                this.isPopState = false;
//            }
//
//            // Ensures that isPopState is reset
//            if (event instanceof NavigationEnd) {
//                this.isPopState = false;
//            }
//        });
        /* End Configures Page Location To Scroll To Top on route Change */
    }

}
