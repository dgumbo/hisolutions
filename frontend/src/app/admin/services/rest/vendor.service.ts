import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';   
import {DataService} from 'shared/services/data.service'; 

@Injectable()
export class  VendorService extends DataService {

    constructor(httpClient: HttpClient) {
        const resourcePath =  '/rest/vendors'; 
        super(httpClient, resourcePath);
    }

}
