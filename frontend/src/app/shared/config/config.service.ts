import {HttpErrorResponse} from '@angular/common/http';
import {NotFoundError} from '../components/error-pages/not-found-error';
import {BadInputError} from '../components/error-pages/bad-input-error';
import {throwError} from 'rxjs';
import {AppError} from '../components/error-pages/app-error';

//@Injectable(
//    //{providedIn: 'root'}
//)
export class ConfigService {

  constructor() { }
   
    private handleError(error: HttpErrorResponse) { 
        if (error.status === 404)
            return throwError(new NotFoundError());
        else if (error.status === 400)
            return throwError(new BadInputError(error));
        else
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(
                    `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`);
            }

        // return an observable with a user-facing error message
        return throwError(new AppError(error));
    }
}
