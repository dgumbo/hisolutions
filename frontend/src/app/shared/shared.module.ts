import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {NoAccessComponent} from './components/error-pages/no-access/no-access.component';
import {RequestNotFoundComponent} from './components/error-pages/request-not-found/request-not-found.component';
import {SharedGlobals} from './shared-globals';
import {ServiceCategoryService} from './services/service-category.service';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler} from '@angular/core';
import {AppErrorHandler} from './components/error-pages/app-error-handler'; 
import {NavBakComponent} from 'shared/components/nav-bak/nav-bak.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    declarations: [
        NavComponent,
        FooterComponent,
        RequestNotFoundComponent,
        NoAccessComponent,
        NavBakComponent,
    ],
    exports: [
        NavComponent,
        FooterComponent,
        CommonModule,
    ],
    providers: [
        SharedGlobals,
        ServiceCategoryService, 
        {provide: ErrorHandler, useClass: AppErrorHandler},
    ]
})
export class SharedModule {}
