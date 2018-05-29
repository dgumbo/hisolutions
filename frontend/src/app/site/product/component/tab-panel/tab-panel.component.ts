import {Component, OnInit, QueryList, ContentChildren} from '@angular/core';
import {ViewTabComponent} from 'site/product/component/view-tab/view-tab.component';

@Component({
    selector: 'app-tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {

    @ContentChildren(ViewTabComponent)
    tabs: QueryList<ViewTabComponent>;

    constructor() {}

    ngOnInit() {
    }

    ngAfterContentInit(){    
          
        console.log( this.  tabs) ;

        const selectedTab = this.tabs.find(tab => tab.selected)

        if (!selectedTab) {
            this.tabs.first.selected = true;
        }
    }

    selectTab(tab: ViewTabComponent) {
        this.tabs.forEach(t => {t.selected = false;})
        tab.selected = true;
    }

}
