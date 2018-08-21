import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http'; 
import {SharedGlobals} from 'app/globals';
import {Observable} from 'rxjs/Observable';
import {NotFoundError} from '../components/error-pages/not-found-error';
import {BadInputError} from '../components/error-pages/bad-input-error';
import {AppError} from '../components/error-pages/app-error';
//import {Observable} from 'rxjs'; 

@Injectable()
export class FileUploadService { 
    uploadUrl : string = this.globals.hostUrl + '/storage/upload';

    constructor(private httpClient: HttpClient, private globals:SharedGlobals) {}

    uploadFileToStorage(file: File): Observable<any> {
        
        let formdata: FormData = new FormData();
        formdata.append('file', file); 

        return this.httpClient.post(this.uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
    }

    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file);
        
        const req = new HttpRequest('POST', this.uploadUrl, formdata, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.httpClient.request(req);
    }

    getFiles(): Observable<any> {
        return this.httpClient.get(this.globals.hostUrl + '/storage/getallfiles')
    }

    downloadImage(filename: string): File { 
        
        let downFileUrl :string = this.globals.hostUrl + '/storage/download/' + filename;
        console.log("\n\ndownFileUrl :" + downFileUrl);
        
        return new File([this.dataURItoBlob(downFileUrl)], filename);
        
    }    

    private dataURItoBlob(dataURI: string): Blob {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }


    public getFilesList(filelistUrl: string) {
        return this.httpClient.get(filelistUrl)
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        if (error.status === 404)
            return Observable.throwError(new NotFoundError());

        else if (error.status === 400)
            return Observable.throwError(new BadInputError(error));

        else return Observable.throwError(new AppError(error));
    }
}