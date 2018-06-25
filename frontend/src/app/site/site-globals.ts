import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core"; 
import {ServiceCategory} from "./../shared/models/service-category"; 
import {ServiceCategoryService} from "./../shared/services/rest/service-category.service";
import {Globals} from "../globals";


@Injectable()
export class SiteGlobals  extends Globals  { 
        
    public serviceCategories: ServiceCategory[];            
    public isCkEditorJsLoaded: boolean = false ;
    
    constructor(private _serviceCategoryService: ServiceCategoryService){
        super();
        //console.log("Globals Constructor Initing!!");        
        this.setServiceCategories();  
    } 
    
    public prepareDocumentUrl(filename : string) : string{
        //console.log(filename);
        return   "/storage/view?filename=" + filename ;
    }
    
    public setServiceCategories  () {  
        //console.log("num run time");
        this._serviceCategoryService.getAllViews("ServiceCategory") 
        .subscribe((res: ServiceCategory[]) =>  this.serviceCategories = res );
    } 
}