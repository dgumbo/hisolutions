import {Injectable} from "@angular/core"; 
import {ServiceCategory} from "./../shared/models/service-category"; 
import {ServiceCategoryService} from "./../shared/services/rest/service-category.service";
import {Globals} from "../globals";


@Injectable()
export class CoreGlobals extends Globals { 
    
    public serviceCategories: ServiceCategory[];       
    
    constructor(private _serviceCategoryService: ServiceCategoryService){
        super();
        //console.log("Globals Constructor Initing!!");        
        this.setServiceCategories();  
    }  
    
    public setServiceCategories  () {  
        //console.log("num run time");
        this._serviceCategoryService.getAllViews("ServiceCategory")
        .subscribe((res: ServiceCategory[]) =>  this.serviceCategories = res );
    } 
}