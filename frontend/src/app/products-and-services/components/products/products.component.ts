import { Component, OnInit } from '@angular/core';
import {Product} from 'shared/models/product';
import {ViewsDataService} from 'shared/services';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Globals} from '../../../globals';
import {Benefit} from 'shared/models/benefit';

declare var $: any 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    productName: string;
    product: Product = { name: ""  };
    //benefits: Benefit[] = [];

    constructor(private viewsDataService: ViewsDataService,
        private activatedRoute: ActivatedRoute,
        public globals: Globals) {

        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.productName = params.get('name');

            if (this.productName) {
                this.getProductByName(this.productName);
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

    getProductByName(name: String) {
        this.viewsDataService.getViewByProperty("Product", "Name", name)
            .subscribe((result: Product) => {

                this.product = result; 
                // this.loadProductImages(this.product);
            });
    }


}
