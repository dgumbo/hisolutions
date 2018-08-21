import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {environment} from 'environments/environment';
import {ViewsDataService} from 'shared/services/views-data.service';
   
export class RestDataService extends ViewsDataService{

    private headers: HttpHeaders;
    private url: string

    constructor(private restHttpClient: HttpClient, resourcePath: string) {
        super(restHttpClient);
        this.url = environment.apiUrl + resourcePath;
        this.restHttpClient = restHttpClient;
        //alert (this.url) ;        

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }

    public create(resource: any) {
        return this.restHttpClient.post(this.url, JSON.stringify(resource), {
            headers: this.headers
        });
        // .catch(this.handleError);
    }

    public get(id: any) {
        return this.restHttpClient.get(this.url + '/' + id);
        // .retry(3)
        // .catch(this.handleError);
    }

    public getAll() {
        //console.log(this.url);
        return this.restHttpClient.get(this.url);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public getByProperty(capitalizedPropertyName: string, propertyValue: any) {
        return this.restHttpClient.get(this.url + '/getBy' + capitalizedPropertyName + '/' + propertyValue);
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public update(id: any, resource: any) {
        return this.restHttpClient.put(this.url + '/' + id, JSON.stringify(resource), {
            headers: this.headers
        });
        //            .retry(3)
        //            .catch(this.handleError);
    }

    public delete(resource: HTMLInputElement) {
        // alert('resource.id : ' + resource.id);
        return this.restHttpClient.delete(this.url + '/' + resource.id);
        //.retry(3)
        //            .catch(this.handleError);
    }

}
