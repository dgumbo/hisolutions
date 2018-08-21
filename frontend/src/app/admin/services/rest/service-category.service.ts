import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RestDataService} from 'shared/services/rest-data.service';

@Injectable()
export class ServiceCategoryService extends RestDataService { 
    constructor(httpClient: HttpClient) {
        const resourcePath =  '/rest/servicecategories';
        super(httpClient, resourcePath);
    }

}
