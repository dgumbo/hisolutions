import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorage} from 'auth/storage/token.storage';

@Injectable() // ({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
    constructor(private storage : TokenStorage ){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
      //  console.log("intercepting !!") ;
        // add authorization header with jwt token if available 
        let token = this.storage.getToken();
        
//        console.log("currentUser.token:", currentUser.token) ;
//        console.log("currentUser:", currentUser) ;
        //console.log("token:", token) ;
        
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