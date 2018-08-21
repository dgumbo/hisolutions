import {ErrorHandler} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {BadInputError} from 'shared/components/error-pages/bad-input-error';
import {NotFoundError} from 'shared/components/error-pages/not-found-error';
import {AppError} from 'shared/components/error-pages/app-error';

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 
export class AppErrorHandler implements ErrorHandler {

    //    handleError(error: any): void {
    //        //alert('An unexpected error occured.' + '\n' + error.originalError + '.');
    //        console.trace();
    //        console.log(error);
    //    }


    handleError(error: HttpErrorResponse) {
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
                    'Backend returned code:', error.status, 
                    'body was:', error.message);

                console.log(error);
            }

        // return an observable with a user-facing error message
        return throwError(new AppError(error));
    }
}

