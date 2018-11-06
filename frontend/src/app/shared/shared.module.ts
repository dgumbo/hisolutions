import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler} from '@angular/core'; 
import { ViewsDataService, PreviousRouteService, ScrollToTopService} from 'shared/services';
import {RequestNotFoundComponent} from 'shared/errors/request-not-found/request-not-found.component';
import {NoAccessComponent} from 'shared/errors/no-access/no-access.component';
import {AppErrorHandler} from 'shared/errors/app-error-handler';

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
    ],
    exports: [
        NavComponent,
        FooterComponent,
        CommonModule,
    ],
    providers: [  
        ScrollToTopService,
        PreviousRouteService,
        ViewsDataService,  
        {provide: ErrorHandler, useClass: AppErrorHandler},
    ]
})
export class SharedModule {}
