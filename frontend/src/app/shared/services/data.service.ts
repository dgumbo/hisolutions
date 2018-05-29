import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';  

import {environment} from "../../../environments/environment";
import {AppError} from '../components/error-pages/app-error';
import {BadInputError} from '../components/error-pages/bad-input-error';
import {NotFoundError} from '../components/error-pages/not-found-error';

//@Injectable()
export class DataService  {
    private headers: HttpHeaders; 
    private url: string

    constructor(private httpClient: HttpClient, resourcePath: string) {  
        this.url = environment.apiUrl + resourcePath;
        this.httpClient = httpClient;
        //alert (this.url) ;        

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }

    public getAll() {
        return this.httpClient.get(this.url)
            .retry(3)
            .catch(this.handleError);
    }

    public create(resource: any) {
        return this.httpClient.post(this.url, JSON.stringify(resource), {
            headers: this.headers
        })
            .catch(this.handleError);
    }

    public get(id: any) {
        return this.httpClient.get(this.url + '/' + id)
            .retry(3)
            .catch(this.handleError);
    }

    public getByProperty(CapitalizedPropertyName: string, propertyValue: any) {
        return this.httpClient.get(this.url + '/getBy' + CapitalizedPropertyName + '/' + propertyValue)
            .retry(3)
            .catch(this.handleError);
    }
    
//    public getByShortName(shortName : String){
//        return this.httpClient.get(this.url + '/getByShortName/' + shortName)
//            .retry(3)
//            .catch(this.handleError);
//            }

    public update(id: any, resource: any) {
        //alert('headers : ' + JSON.stringify(this.headers));
        //alert('Update.\n' + this.url + '/' + id + "\n\n" + JSON.stringify(resource));
        return this.httpClient.put(this.url + '/' + id, JSON.stringify(resource), {
            headers: this.headers
        })
            .retry(3)
            .catch(this.handleError);
    }

    public delete(resource: HTMLInputElement) {
        // alert('resource.id : ' + resource.id);
        return this.httpClient.delete(this.url + '/' + resource.id)
            //.retry(3)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404)
            return Observable.throwError(new NotFoundError());
        else if (error.status === 400)
            return Observable.throwError(new BadInputError(error));
        else 
            return Observable.throwError(new AppError(error));
    }
}
