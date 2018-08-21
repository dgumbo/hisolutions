import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
import {environment} from 'environments/environment';

@Injectable({providedIn: 'root'})
export class ViewsDataService  { 
    private viewsUrl: string;
    private viewsResourcePath: string = '/views/rest';
       
    constructor(private httpClient: HttpClient ) { 
        this.viewsResourcePath = '/views/rest'; 
        this.viewsUrl = environment.apiUrl + this.viewsResourcePath;
    }

    public getAllServiceCategories( ) { 
        return this.getAllViews("ServiceCategory"); 
    }

    public getAllProducts( ) { 
        return this.getAllViews("Product"); 
    }

    public getServiceCategory(id: number) { 
        return this.getView("ServiceCategory", id); 
    } 

    public getView(capitalizedModelName: string, id: any) {
        //console.log(this.viewsUrl + '/get' + capitalizedModelName + 'ById' + id);
        return this.httpClient.get(this.viewsUrl + '/get' + capitalizedModelName + 'ById' + id);
        // .retry(3)
        // .catch(this.handleError);
    }

    public getAllViews(capitalizedModelName: string) {
        //console.log(this.viewsUrl + '/getAll' + capitalizedModelName);
        //console.trace();
        return this.httpClient.get(this.viewsUrl + '/getAll' + capitalizedModelName);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public getViewByProperty(capitalizedModelName: string, capitalizedPropertyName: string, propertyValue: any) {
        //console.log(this.viewsUrl + '/get'+ capitalizedModelName +'By' + capitalizedPropertyName + '/' + propertyValue);
        return this.httpClient.get(this.viewsUrl + '/get' + capitalizedModelName + 'By' + capitalizedPropertyName + '/' + propertyValue);
        //            .retry(3)
        //            .catch(this.handleError);
    }
}
