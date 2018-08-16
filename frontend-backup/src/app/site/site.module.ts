import {NgModule} from '@angular/core'; 
import {SharedModule} from '../shared/shared.module'; 
import {SiteRoutingModule} from './site-routing.module';
import {SiteGlobals} from './site-globals'; 
import {ServiceCategoryViewComponent} from './service-category/component/view/service-category-view.component';
import {ProductViewComponent} from './product/component/view/product-view.component';
import { ViewTabComponent } from './product/component/view-tab/view-tab.component';
import {TabPanelComponent} from 'site/product/component/tab-panel/tab-panel.component';
 
@NgModule({
    imports: [
        SiteRoutingModule,
        SharedModule 
    ],
    exports:[ ],
    declarations: [ProductViewComponent, ServiceCategoryViewComponent, ViewTabComponent, TabPanelComponent  ],
    
    providers: [
        SiteGlobals 
    ]
})
export class SiteModule {}
