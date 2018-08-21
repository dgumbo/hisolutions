import {Component, OnInit} from '@angular/core';
import {Globals} from 'app/globals';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 
    private tog: any; 

    constructor(public globals: Globals, private router: Router) {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ).subscribe(() => {           
            if (this.tog.attr("aria-expanded") == "true") {
                this.tog.attr("aria-expanded", "false");
                $('.navbar-collapse.collapse').removeClass('show');
                $('.navbar-collapse.collapse').removeClass('collapsed');
            }
        });
    }

    ngOnInit() {
        // Add Background When Nav in Mobile
        let toggler = $('[aria-expanded="false"]');
        this.tog = toggler;
        toggler.on('click', function () {
            /* Check status at time of click, if False, then Aria-Expanded will be setting to ture*/
            let nav_expanded = toggler.attr("aria-expanded") == "true" ? false : true; 
            //console.log(expanded) ;
            if (nav_expanded) {
                $('.navbar-collapse.collapse').addClass('collapsed');
            } else {
                $('.navbar-collapse.collapse').removeClass('collapsed');
            }
        });
    }
}
