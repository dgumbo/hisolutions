import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable()
export class BlogService extends DataService {

    constructor(httpClient: HttpClient) {
        const blogsUrl = 'http://localhost:8084/blogs';
        super(httpClient, blogsUrl);
    }

}
