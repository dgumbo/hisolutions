import {Component, OnInit, OnDestroy} from '@angular/core';
import {ScriptService} from 'shared/services/script.service'; 

declare var $: any
declare var WOW: any
//declare var require: any

import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ScriptService]
})
export class ContactUsComponent implements OnInit , OnDestroy{
    lat: number = -17.818358;
    lng: number = 31.049104;
    markerLat: number = -17.818358;
    markerLng: number = 31.049104;
    zoom: number = 13;

    constructor() {}

    ngOnDestroy(): void {
        // Unbind Scroll Event
        $(window).unbind("scroll");
    }

    ngOnInit() { 

        // Header fixed and Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
                $('#header').addClass('header-fixed');
            } else {
                $('.back-to-top').fadeOut('slow');
                $('#header').removeClass('header-fixed');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

        // Initiate the wowjs
        new WOW().init();

        // Initiate superfish on nav menu
        $('.nav-menu').superfish({
            animation: {opacity: 'show'},
            speed: 400
        });

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
    
    onChooseLocation(event){
//        this.lat = event.coord.lat;
//        this.lng = event.coord.lng;
    }
}
