import {Component, OnInit} from '@angular/core'; 
import {ServiceCategory} from 'shared/models/service-category';
import {ServiceCategoryService} from 'admin/services/rest/service-category.service';
import {AppError} from 'shared/errors/app-error';
import {NotFoundError} from 'shared/errors/not-found-error'; 

@Component({
    selector: 'app-service-category',
    templateUrl: './service-category.component.html',
    styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent implements OnInit {
    serviceCategories: ServiceCategory[]; 
    loaded: boolean = false ;

    constructor(private _serviceCategoryService :ServiceCategoryService) { 
    }
    
    ngOnInit() {
        this.getServiceCategories(); 
    } 
    
    getServiceCategories  () {
        //console.log("num run time");
        this._serviceCategoryService.getAll ().subscribe((scs : ServiceCategory[])=> 
        { this.serviceCategories = scs; this.loaded = true ;});
    }

    deleteServiceCategory(serviceCategory) {
        this._serviceCategoryService.delete(serviceCategory)
            .subscribe( () => {
                const index = this.serviceCategories.indexOf(serviceCategory);
                this.serviceCategories.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('serviceCategory has already been deleted.');
                else throw error;
            }); 
    } 
} 