import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TokenStorage} from '../storage/token.storage';
import {environment} from 'environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt'; 
import {Router} from '@angular/router';
import {Globals} from 'app/globals';

@Injectable({providedIn: 'root'})
export class AuthService {
    private userUrl = environment.apiUrl;
    private jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient, private tokenStorage: TokenStorage, private globals: Globals, private router: Router) {}

    login(username: string, password: string) {
        const credentials = {username: username, password: password};
        return this.http.post<any>(this.userUrl + '/jwtauth/auth', credentials)
            .pipe(map(user => {
//                console.log("user :", user);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    this.tokenStorage.saveToken(user.token);
                    this.globals.activateAdmin();
                }

                return user;
            }));
    }

    reset() { 
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
        }
    }

    logout() {
        //console.trace();
        // remove user from local storage to log user out
        this.globals.deActivateAdmin();

        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
            //        return this.http.post<any>(this.userUrl + '/jwtauth/logout', '')
            //            .pipe(
            //                map(res => {
            //                    console.log("user :", res);
            //
            //                    return 'Logged Out !!';
            //                }
            //                )
            //            );
            this.router.navigateByUrl('/');
            //this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        }
        console.log("Logged Out !!");
    }

    public isAuthenticated(): boolean {

        const token = localStorage.getItem('token');

        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
}