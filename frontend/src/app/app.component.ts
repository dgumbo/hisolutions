import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any
declare var WOW: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
   
    ngOnDestroy(): void { 
        // Unbind Scroll Event
        $(window).unbind("scroll");
    }

    ngOnInit() {  
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
    }
}
