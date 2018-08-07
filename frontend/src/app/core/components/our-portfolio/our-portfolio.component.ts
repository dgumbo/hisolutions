import { Component, OnInit, OnDestroy } from '@angular/core'; 

declare var $: any
declare var WOW: any

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class OurPortfolioComponent implements OnInit, OnDestroy {

  constructor() { }

    ngOnDestroy(): void { 
        $('.nav-container').removeClass('nav-container-bg'); 
    }

    ngOnInit() { 
        $('.nav-container').addClass('nav-container-bg');   
    }
}
