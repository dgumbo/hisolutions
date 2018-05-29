import {Component, OnInit, OnDestroy} from '@angular/core'; 
import {ActivatedRoute, ParamMap} from '@angular/router'; 
import {Product} from 'shared/models/product';
import {ProductService} from 'shared/services/rest/product.service';
import {SiteGlobals} from 'site/site-globals';  

declare var $: any
declare var WOW: any

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss'] 
})
export class ProductViewComponent implements OnInit, OnDestroy {

    productName: string;
    product: Product = { name: "" }; 

    constructor(private _productService: ProductService, 
        private activatedRoute: ActivatedRoute, 
        public globals: SiteGlobals) {

        this.activatedRoute.paramMap.subscribe((params: ParamMap)  => {        
            this.productName = params.get('name');
 
            if (this.productName) {
                this.getProductByName(this.productName);
            }
        });
    }
   
    ngOnInit() {        
        // Header fixed and Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
                $('#header').addClass('header-fixed');
                $('#header').removeClass('header-bg-purple');
            } else {
                $('.back-to-top').fadeOut('slow');
                $('#header').removeClass('header-fixed');
                $('#header').addClass('header-bg-purple');
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
    }
    
    ngOnDestroy(): void {
//        $('#header').addClass('header-bg-purple');
//        $('#header').removeClass('header-bg-purple');
//                
        // Unbind Scroll Event
        $(window).unbind("scroll") ;
    }

    
    getProductByName(name: String) {
        this._productService.getByProperty("Name", name)
            .subscribe((result :Product)=> {
            this.product = result; 
            // this.loadServiceCategoryImages(this.serviceCategory);
        });
    }
}
