import {Injectable} from "@angular/core";  
import {ServiceCategory} from "./models/service-category";
import {ServiceCategoryService} from "./services/service-category.service";
import {environment} from "environments/environment";

@Injectable()
export class SharedGlobals    {
    public readonly hostUrl : string = environment.apiUrl;
    public readonly production: boolean = environment.production;
    public serviceCategories: ServiceCategory[];    
    
    public isCkEditorJsLoaded:boolean = false;
      
    constructor(private _serviceCategoryService: ServiceCategoryService){ 
        //console.log("Globals Constructor Initing!!"); 
        this.setServiceCategories();  
    }  
    
    public setServiceCategories  () {  
        //console.log("num run time");
        this._serviceCategoryService.getAllViews("ServiceCategory")
        .subscribe((res: ServiceCategory[]) =>  this.serviceCategories = res );
    } 
    
    public prepareDocumentUrl(filename : string) : string{
        //console.log(filename);
        return   "/storage/view?filename=" + filename ;
    } 
}