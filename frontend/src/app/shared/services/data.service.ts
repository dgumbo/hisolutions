import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {environment} from 'environments/environment';
  
//import { Injectable } from '@angular/core'; 
//@Injectable(
//    {  providedIn: 'root'}
//    )
export class DataService {

    private headers: HttpHeaders;
    private url: string
    private viewsUrl: string;
    private viewsResourcePath: string = '/views/rest';

    constructor(private httpClient: HttpClient, resourcePath: string) {
        this.url = environment.apiUrl + resourcePath;
        this.viewsUrl = environment.apiUrl + this.viewsResourcePath;
        this.httpClient = httpClient;
        //alert (this.url) ;        

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }

    public create(resource: any) {
        return this.httpClient.post(this.url, JSON.stringify(resource), {
            headers: this.headers
        });
        // .catch(this.handleError);
    }

    public get(id: any) {
        return this.httpClient.get(this.url + '/' + id);
        // .retry(3)
        // .catch(this.handleError);
    }

    public getView(capitalizedModelName: string, id: any) {
        //console.log(this.viewsUrl + '/get' + capitalizedModelName + 'ById' + id);
        return this.httpClient.get(this.viewsUrl + '/get' + capitalizedModelName + 'ById' + id);
        // .retry(3)
        // .catch(this.handleError);
    }

    public getAll() {
        //console.log(this.url);
        return this.httpClient.get(this.url);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public getAllViews(capitalizedModelName: string) {
        //console.log(this.viewsUrl + '/getAll' + capitalizedModelName);
        //console.trace();
        return this.httpClient.get(this.viewsUrl + '/getAll' + capitalizedModelName);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public getByProperty(capitalizedPropertyName: string, propertyValue: any) {
        return this.httpClient.get(this.url + '/getBy' + capitalizedPropertyName + '/' + propertyValue);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public getViewByProperty(capitalizedModelName: string, capitalizedPropertyName: string, propertyValue: any) {
        //console.log(this.viewsUrl + '/get'+ capitalizedModelName +'By' + capitalizedPropertyName + '/' + propertyValue);
        return this.httpClient.get(this.viewsUrl + '/get' + capitalizedModelName + 'By' + capitalizedPropertyName + '/' + propertyValue);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public update(id: any, resource: any) {
        return this.httpClient.put(this.url + '/' + id, JSON.stringify(resource), {
            headers: this.headers
        });
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public delete(resource: HTMLInputElement) {
        // alert('resource.id : ' + resource.id);
        return this.httpClient.delete(this.url + '/' + resource.id);
        //.retry(3)
        //            .catch(this.handleError);
    }

}
