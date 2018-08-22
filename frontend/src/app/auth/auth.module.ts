import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule, authModuleRoutedComponents} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtInterceptor, JwtErrorInterceptor} from './interceptors';  
import {HTTP_INTERCEPTORS} from '@angular/common/http';  
import {TokenStorageService} from 'auth/services';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,

        FormsModule,
        ReactiveFormsModule, 
    ],
    declarations: [
        ...authModuleRoutedComponents,
         
    ],
    providers: [ 
         TokenStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor, 
            multi: true
        }, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtErrorInterceptor,
            multi: true
        }
    ]
})
export class AuthModule {}
