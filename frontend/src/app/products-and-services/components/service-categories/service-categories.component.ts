import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from 'shared/models/product';
import {ServiceCategory} from 'shared/models/service-category'; 
import {Globals} from 'app/globals';
import {ActivatedRoute, ParamMap} from '@angular/router'; 
import {ViewsDataService} from 'shared/services';
import {environment} from 'environments/environment';

declare var $: any 

@Component({
    selector: 'app-service-categories',
    templateUrl: './service-categories.component.html',
    styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit, OnDestroy {

    serviceCategoryName: string;
    serviceCategory: ServiceCategory = { name: ""  };
    serviceCategoryProducts: Product[] = [];

    constructor(private viewsDataService: ViewsDataService,
        private activatedRoute: ActivatedRoute,
        public globals: Globals) {

        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.serviceCategoryName = params.get('name');

            if (this.serviceCategoryName) {
                this.getServiceCategoryByName(this.serviceCategoryName);
            }
        });
    }

    ngOnDestroy(): void {
        $('.nav-container').addClass('nav-container-bg');
        $('.nav-container').removeClass('nav-container-scrolled');
    }

    ngOnInit() {
        $('.nav-container').removeClass('nav-container-bg');
        $('.nav-container').removeClass('nav-container-scrolled'); 

        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });

        // Smoth scroll on page hash links
        $('a[href*="#"]:not([href="#"],[href*="#/"],[href*="Carousel"])').on('click', function () {
//            console.log("this.hash : ", this.hash);
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
                
                //<!-- Used D-None So That Components HASH Ref can be initialized onNgInit 
                if (this.serviceCategoryProducts && this.serviceCategoryProducts.length >= 1){
                    $('section#services-hero-section .hero-title .btn-get-started.d-none').removeClass("d-none");
                }
                
                /* For Dev Environment */
                if (environment.production == false) {
                    for (let product of this.serviceCategoryProducts) {
                        product.imageUrl = environment.apiUrl + product.imageUrl;
                    }
                }
            });
    }
}

