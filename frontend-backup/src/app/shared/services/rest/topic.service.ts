import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import {DataService} from 'shared/services/data.service'; 

@Injectable()
export class TopicService extends DataService {

    constructor(httpClient: HttpClient) {
        const resourcePath =  '/rest/topics'; 
        super(httpClient, resourcePath);
    }

}
