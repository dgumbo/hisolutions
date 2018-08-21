import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators'; 
import {UserService} from 'auth/services';
import {User} from 'auth/models';
 

@Component({templateUrl: 'auth.home.component.html'})
export class AuthHomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe((users:any) => { 
            this.users = users; 
        });
    }
}