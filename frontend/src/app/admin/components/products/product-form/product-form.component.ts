import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import 'rxjs/add/operator/take';
import {ScriptService} from 'shared/services/script.service';
import {Product} from 'shared/models/product';
import {ServiceCategory} from 'shared/models/service-category';
import {Skill} from 'shared/models/skill';
import {PreRequisite} from 'shared/models/pre-requisite';
import {Vendor} from 'shared/models/vendor';
import {ProductType} from 'shared/models/product-type';
import {AdminGlobals} from 'admin/admin-globals';
import {ServiceCategoryService} from 'shared/services/rest/service-category.service';
import {ProductService} from 'shared/services/rest/product.service';
import {ProductTypeService} from 'shared/services/rest/product-type.service';
import {VendorService} from 'shared/services/rest/vendor.service';
import {PreRequisiteService} from 'shared/services/rest/pre-requisite.service';
import {SkillService} from 'shared/services/rest/skill.service';
import {NotFoundError} from 'shared/components/error-pages/not-found-error';
import {AppError} from 'shared/components/error-pages/app-error';
 

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
    providers: [ScriptService]
})

export class ProductFormComponent implements OnInit {
    //SharedModule: SharedModule ;
    id: string;
    product: Product;

    serviceCategories: ServiceCategory[];
    productTypes: ProductType[];
    productVendors: Vendor[];
    preRequisites: PreRequisite[];
    skills :  Skill[];

    isNewForm: boolean = false;
     
    ckeditorContent: string = '';

    constructor(private route: ActivatedRoute
        , private router: Router
        , private scriptService: ScriptService
        , public globals: AdminGlobals
        , private _serviceCategoryService: ServiceCategoryService
        , private _productService: ProductService
        , private _productTypeService: ProductTypeService
        , private _vendorService: VendorService
        , private _preRequisiteService: PreRequisiteService
        , private _skillService: SkillService) {

        this.getDropDownListItems();
        this.id = this.route.snapshot.paramMap.get('id');
        this.product = {
            name: "",
            description: "",
            price: 0,
            productType: {name: ""},
            vendor: { name: ""},
            preRequisites: [],
            skillsToGain: [],
            serviceCategory : {name:"" }
        };

        if (this.id) {
            this.getProduct(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
        if (!this.globals.isCkEditorJsLoaded){
            this.scriptService.load('ckeditor-basic')
                .then(data => { 
                //console.log('script loaded : ', data[0].loaded); 
                this.globals.isCkEditorJsLoaded = data[0].loaded;
            }).catch(error => console.log(error) );
        }
    }

    getDropDownListItems() {
        this.getServiceCategories();
        this.getProductTypes();
        this.getProductVendors();
        this.getPreRequisites();
        this.getSkills();
    }

    getProduct(productId) {
        this._productService.getView("Product",productId)
            .take(1)
            .subscribe((prod :Product)=> this.product = prod);
    }

    getServiceCategories() {
        this._serviceCategoryService.getAllViews("ServiceCategory")
            .subscribe((servicecatgrs :ServiceCategory[])=> this.serviceCategories = servicecatgrs);
    }

    getProductTypes() {
        this._productTypeService.getAll()
            .subscribe((prodtypes :ProductType[])=> this.productTypes = prodtypes);
    }

    getProductVendors() {
        this._vendorService.getAll()
            .subscribe((prodvens :Vendor[])=> this.productVendors = prodvens);
    }

    getPreRequisites() {
        this._preRequisiteService.getAll()
            .subscribe((prereq :PreRequisite[])=> this.preRequisites = prereq);
    }

    getSkills() {
        this._skillService.getAll()
            .subscribe((s:Skill[]) => this.skills = s);
    }

    saveProduct(product: Product) {
        console.log(JSON.stringify(product));

        if (this.isNewForm) {
            //             this._productTypeService.get(produc            t.productType.id)
            //                 .toPromise().then(pt => {product.productType = pt; alert(JSON.stringify(product.productType)); }) ;

            this._productService.create(product)
                .subscribe(prod => {
                    this.router.navigate(["/products"]);
                    //  document.location.reload() ;
                })
                ;
        }
        else {
            this._productService.update(this.id, product)
                .subscribe(prod => {
                    //alert('prod.id' + prod.id + '. index : ' + this.editProductIndex);
                    //                    this.products.splice(this.editProductIndex, 1);
                    //                    this.products.splice(this.editProductIndex, 0, prod);
                    //                    this.products.push(product); 
                    this.router.navigate(["/products"]);

                });
        }
    }

    deleteProduct(product) {

        this._productService.delete(product)
            .subscribe(() => {
                //                const index = this.products.indexOf(product);
                //                this.products.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('product has already been deleted.');
                else throw error;
            });
    }

    updateSelectedPreRequisites(event) { 
        let eid = event.target.name; 
        let indexOfChecked = this.product.preRequisites.findIndex(pr => pr.id == eid);
         
        if (event.target.checked) {
            if (indexOfChecked < 0) {      
                let preRequisite: PreRequisite = this.preRequisites.find(pr => pr.id == eid);
                this.product.preRequisites.push(preRequisite);
            }
        }
        else {
            if (indexOfChecked > -1) {
                this.product.preRequisites.splice(indexOfChecked, 1);
            }    
        }
    } 

    getPreRequisiteIndex(preRequisite: PreRequisite) {
        if (preRequisite && preRequisite.id) { 
            if (this.product.preRequisites.length > 0) {
                  return this.product.preRequisites.findIndex(pr => pr.id == preRequisite.id);
            }
        }
        return -1;
    }

    updateSelectedSkills(event) { 
        let eid = event.target.name; 
        let indexOfChecked = this.product.skillsToGain.findIndex(s => s.id == eid);
         
        if (event.target.checked) {
            if (indexOfChecked < 0) {      
                let skill: Skill = this.skills.find(pr => pr.id == eid);
                this.product.skillsToGain.push(skill);
            }
        }
        else {
            if (indexOfChecked > -1) {
                this.product.skillsToGain.splice(indexOfChecked, 1);
            }    
        }
    } 

    getSkillIndex(skill: Skill) {
        if (skill && skill.id) { 
            if (this.product.skillsToGain.length > 0) {
                  return this.product.skillsToGain.findIndex(s => s.id == skill.id);
            }
        }
        return -1;
    }
}