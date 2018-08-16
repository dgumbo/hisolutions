import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

@Injectable()
export class Globals   {
    public readonly hostUrl : string = environment.apiUrl;
    public readonly production: boolean = environment.production;
                 
    public isCkEditorJsLoaded: boolean = false ;
    
    constructor( ){} 
    
    public prepareDocumentUrl(filename : string) : string{
        //console.log(filename);
        return   "/storage/view?filename=" + filename ;
    } 
}