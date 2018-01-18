import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable()
export class AccountService extends DataService {

    constructor(httpClient: HttpClient) {
        const accountUrl = 'http://localhost:8084/accounts';
        super(httpClient, accountUrl);
    }

}
