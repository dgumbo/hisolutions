import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorageService} from 'auth/services';

@Injectable() // ({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
    private jwtHelper: JwtHelperService = new JwtHelperService();
    
    constructor(private storage : TokenStorageService ){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
      //  console.log("intercepting !!") ;
        // add authorization header with jwt token if available 
        let token = this.storage.getToken();  
        
        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Token ' + token
                }
            });
//            console.log("token",token);
//            console.log(request);
        }

        return next.handle(request);
    }
}