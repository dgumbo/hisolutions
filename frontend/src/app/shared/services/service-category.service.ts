import { Injectable } from '@angular/core';
import {DataService} from '../data.service'; 
import {HttpClient} from '@angular/common/http';

@Injectable(
    //{providedIn: 'root'}
)
export class ServiceCategoryService  extends DataService { 
    constructor(httpClient: HttpClient) {
        const resourcePath =  '/rest/servicecategories';
        super(httpClient, resourcePath);
    }
}
