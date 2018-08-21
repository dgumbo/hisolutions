import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule, authModuleRoutedComponents} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtInterceptor} from './interceptors'; 
import {TokenStorage} from 'auth/storage/token.storage';
import {HTTP_INTERCEPTORS} from '@angular/common/http'; 
import {JwtHelperService} from '@auth0/angular-jwt';

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
         TokenStorage,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ]
})
export class AuthModule {}
