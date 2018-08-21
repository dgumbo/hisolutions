import {Component, OnInit} from '@angular/core';
import {AuthService} from 'auth/services';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
    error = '';
    
    constructor(private authService: AuthService) {}

    ngOnInit() {    } 

    public logout() {
//        console.log("Now Logging Out !!") ;
        this.authService.logout();
    }
}
