import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from 'shared/models/product';
import {ServiceCategory} from 'shared/models/service-category';
import {ViewsDataService} from 'shared/services/views-data.service';
import {Globals} from 'app/globals';
import {ActivatedRoute, ParamMap} from '@angular/router';

declare var $: any
declare var WOW: any

@Component({
    selector: 'app-service-categories',
    templateUrl: './service-categories.component.html',
    styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit, OnDestroy {

    serviceCategoryName: string;
    serviceCategory: ServiceCategory = {name: ""};
    serviceCategoryProducts: Product[] = [];

    constructor(private viewsDataService: ViewsDataService,
        private activatedRoute: ActivatedRoute,
        public globals: Globals) {

        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            $('.btn-get-started').addClass('d-none');
            this.serviceCategoryName = params.get('name');

            if (this.serviceCategoryName) {
                this.getServiceCategoryByName(this.serviceCategoryName);
            }
        });
    }

    ngOnDestroy(): void {
        // $('.nav-container').addClass('nav-container-fixed');
        $('.nav-container').addClass('nav-container-bg');
        $('.nav-container').removeClass('nav-container-scrolled');
    }

    ngOnInit() {
        //  $('.nav-container').addClass('nav-container-fixed');
        $('.nav-container').removeClass('nav-container-bg');
        $('.nav-container').removeClass('nav-container-scrolled');

        $('.btn-get-started').addClass('d-none');

        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });

        // Smoth scroll on page hash links
        $('a[href*="#"]:not([href="#"],[href*="#/"],[href*="Carousel"])').on('click', function () {
            //console.log("this.hash : ", this.hash);
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash); 

                if (target.length) {
                    var top_space = 0;

                    if ($('.nav-container').length) {
                        top_space = $('.nav-container').outerHeight();

                        if (!$('.nav-container').hasClass('nav-container-scrolled')) {
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
    }

    getServiceCategoryByName(name: String) {
        this.viewsDataService.getViewByProperty("ServiceCategory", "Name", name)
            .subscribe((result: ServiceCategory) => {

                this.serviceCategory = result;
                this.getServiceCategoryProducts(result.id);
                // this.loadServiceCategoryImages(this.serviceCategory);
            });
    }

    getServiceCategoryProducts(serviceCategoryID: number) {
        this.viewsDataService.getViewByProperty("Product", "ServiceCategoryId", serviceCategoryID)
            .subscribe((result: Product[]) => {
                this.serviceCategoryProducts = result;
                if (this.serviceCategoryProducts && this.serviceCategoryProducts.length >= 1)
                    $('.btn-get-started').removeClass('d-none');
                //console.log("this.serviceCategoryProducts.length : ", this.serviceCategoryProducts.length);
                // this.loadServiceCategoryImages(this.serviceCategory);
            });
    }
}

