import {ErrorHandler} from '@angular/core';

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export class AppErrorHandler implements ErrorHandler{

    handleError(error: any): void {
      //  alert('An unexpected error occured.' + '\n' + error.originalError + '.');
        console.log(error);
    }

}
