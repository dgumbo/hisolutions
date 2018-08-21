import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {

    private userUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get(this.userUrl + '/users/getAll');
    }

    public getUsers() {
        return this.http.get(this.userUrl + '/users/getAll');
    }
}