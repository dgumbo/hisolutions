import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {LocationStrategy} from '@angular/common'; 

declare var $: any
declare var WOW: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    isPopState = false;
    
    constructor(private router: Router
    , private locStrat: LocationStrategy ) {}
    

    ngOnDestroy(): void { 
        $(window).unbind("scroll");
    }
    
    ngOnInit(): void {
        this.locStrat.onPopState(() => {
            this.isPopState = true;
        });

        this.router.events.subscribe(event => {
            // Scroll to top if accessing a page, not via browser history stack
            if (event instanceof NavigationEnd && !this.isPopState) {
                window.scrollTo(0, 0);
                this.isPopState = false;
            }

            // Ensures that isPopState is reset
            if (event instanceof NavigationEnd) {
                this.isPopState = false;
            }
        });
         

        // Header fixed and Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow'); 
            } else {
                $('.back-to-top').fadeOut('slow'); 
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

        // Initiate the wowjs
        new WOW().init();
 


        //  $('a[href*="#"]:not([href="#"],[href*="#/"],[href*="Carousel"])').addClass("just-Kidding");

        // Smoth scroll on page hash links
        $('a[href*="#"]:not([href="#"],[href*="#/"],[href*="Carousel"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                if (target.length) {
                    var top_space = 0;

                    if ($('#header').length) {
                        top_space = $('#header').outerHeight();

                        if (!$('#header').hasClass('header-fixed')) {
                            top_space = top_space - 20;
                        }
                    }

                    $('html, body').animate({
                        scrollTop: target.offset().top - top_space
                    }, 1500, 'easeInOutExpo');

                    if ($(this).parents('.nav-menu').length) {
                        $('.nav-menu .menu-active').removeClass('menu-active');
                        $(this).closest('li').addClass('menu-active');
                    }

                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                        $('#mobile-body-overly').fadeOut();
                    }
                    return false;
                }
            }
        });

        // Porfolio filter
        $("#portfolio-flters li").click(function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            var selectedFilter = $(this).data("filter");
            $("#portfolio-wrapper").fadeTo(100, 0);

            $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

            setTimeout(function () {
                $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
                $("#portfolio-wrapper").fadeTo(300, 1);
            }, 300);
        });

        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });

    }
}


