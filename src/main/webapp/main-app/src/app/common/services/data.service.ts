import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {NotFoundError} from '../not-found-error';
import {BadInputError} from '../bad-input-error';
import {AppError} from '../app-error';

@Injectable()
export class DataService {
     //private headers: HttpHeaders;

    constructor(private httpClient: HttpClient, private url: string) {
        this.httpClient = httpClient;
    }

    getAll() {
        return this.httpClient.get(this.url) 
            .retry(3)
            .catch(this.handleError);
    }

    create(resource: any) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        
        return this.httpClient.post(this.url, JSON.stringify(resource), {
            headers: headers
            })
            .catch(this.handleError);
    }

    get(id: any) {
        return this.httpClient.get(this.url + '/' + id)
            .retry(3)
            .catch(this.handleError);
    }

    update(resource: HTMLInputElement) {
        return this.httpClient.put(this.url + '/' + resource.id, JSON.stringify(resource))
            .retry(3)
            .catch(this.handleError);
    }

    delete(resource: HTMLInputElement) {
        return this.httpClient.delete(this.url + '/' + resource.id)
            .retry(3)
            .catch(this.handleError);
    }

    getByProperty(propertyName: string, propertyValue: any) {
        return this.httpClient.get(this.url + '/getBy' + propertyName + '/' + propertyValue)
            .retry(3)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404)
            return Observable.throw(new NotFoundError());

        else if (error.status === 400)
            return Observable.throw(new BadInputError(error));

        else return Observable.throw(new AppError(error));
    }
}
