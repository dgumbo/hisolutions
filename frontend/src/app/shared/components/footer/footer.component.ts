import {Component, OnInit} from '@angular/core';
import {environment} from 'environments/environment';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Globals} from 'app/globals';

declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public readonly production: boolean = environment.production;

    constructor(private router: Router, public globals:Globals) { 
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ).subscribe(() => {
            var docHeight = $(window).height();
            var footerHeight = $('#footer').height();
            var footerTop = $('#footer').position().top + footerHeight;
            
//            console.log("docHeight : ", docHeight) ;
//            console.log("footerHeight : ", footerHeight) ;
//            console.log("footerTop : ", footerTop) ;
            
            if (footerTop + 5 < docHeight) {
                //console.log("adding footer margin top ",   (docHeight - footerTop - 5) + 'px') ;                
                $('#footer').css('margin-top',   (docHeight - footerTop - 5) + 'px'); 
            }
            else{ 
                //console.log("removing footer margin top") ;
                $('#footer').css('margin-top', '0px');
            }
        });
    }

    ngOnInit() {    }
}
