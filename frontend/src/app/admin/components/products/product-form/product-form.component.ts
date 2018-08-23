import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ScriptService} from 'shared/services/script.service';
import {Product} from 'shared/models/product';
import {ServiceCategory} from 'shared/models/service-category';
import {Skill} from 'shared/models/skill';
import {PreRequisite} from 'shared/models/pre-requisite';
import {Vendor} from 'shared/models/vendor';
import {ProductType} from 'shared/models/product-type';
import {ServiceCategoryService} from 'admin/services/rest/service-category.service';
import {ProductService} from 'admin/services/rest/product.service';
import {ProductTypeService} from 'admin/services/rest/product-type.service';
import {VendorService} from 'admin/services/rest/vendor.service';
import {PreRequisiteService} from 'admin/services/rest/pre-requisite.service';
import {SkillService} from 'admin/services/rest/skill.service';
import {NotFoundError} from 'shared/errors/not-found-error';
import {AppError} from 'shared/errors/app-error';

import 'shared/services/ckeditor.loader';
import 'ckeditor';
import {PreviousRouteService, FileUploadService} from 'shared/services';
import {Observable} from 'rxjs';
import {DocumentMetadata} from 'shared/models/document-metadata'; 


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
    skills: Skill[];

    imageUrlFile: File;

    isNewForm: boolean = false;
    isImageChanged: boolean = false;
    isUploadingInProgress: boolean = false;
    isSavingInProgress: boolean = false;

    constructor(private route: ActivatedRoute,
        private previousRoute: PreviousRouteService
        , private _fileUploaderService: FileUploadService
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
            serviceCategory: {name: ""},
            productType: {name: ""},
            vendor: {name: ""},
            skillsToGain: [],
            preRequisites: []
        };

        if (this.id) {
            this.getProduct(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    ngOnInit() {
    }

    getDropDownListItems() {
        this.getServiceCategories();
        this.getProductTypes();
        this.getProductVendors();
        this.getPreRequisites();
        this.getSkills();
    }

    getProduct(productId) {
        this._productService.get(productId)
            //.take(1)
            .subscribe((prod: Product) => {this.product = prod; });
    }

    getServiceCategories() {
        this._serviceCategoryService.getAll()
            .subscribe((servicecatgrs: ServiceCategory[]) => this.serviceCategories = servicecatgrs);
    }

    getProductTypes() {
        this._productTypeService.getAll()
            .subscribe((prodtypes: ProductType[]) => this.productTypes = prodtypes);
    }

    getProductVendors() {
        this._vendorService.getAll()
            .subscribe((prodvens: Vendor[]) => this.productVendors = prodvens);
    }

    getPreRequisites() {
        this._preRequisiteService.getAll()
            .subscribe((prereq: PreRequisite[]) => this.preRequisites = prereq);
    }

    getSkills() {
        this._skillService.getAll()
            .subscribe((s: Skill[]) => this.skills = s);
    }

    toDeleteMetadataVar: DocumentMetadata = {};
    saveProduct(product: Product) {
        this.isSavingInProgress = true; 

        if (this.isImageChanged) {
//            console.log("Image Changed - Uploading Image Before Saving");
            this.isUploadingInProgress = true;

            this.uploadImage().subscribe((metadata: any) => {
                this.toDeleteMetadataVar = metadata;
                this.isUploadingInProgress = false;
                product.imageUrl = JSON.parse(metadata).filename;  
                this.startSaveAfterImageUpload(product);
            });
        }
        else {
            this.startSaveAfterImageUpload(product);
        }
    }

    uploadImage(): Observable<any> {
        return this._fileUploaderService.uploadFileToStorage(this.imageUrlFile);
    }

    startSaveAfterImageUpload(product: Product) {
        this.isSavingInProgress = true;
        if (this.isNewForm) {
//            console.log("before new product save image path after upload is : ", product.imageUrl);
            this._productService.create(product)
                .subscribe((res: any) => {
//                    console.log("before new product save image path after upload is : ", res.imageUrl);
                    this.isSavingInProgress = false;
                    this.previousRoute.navigatePreviousUrl();
                })                ;
        }
        else {
            this._productService.update(this.id, product)
                .subscribe((res: any) => {
                    this.isSavingInProgress = false;
                    this.previousRoute.navigatePreviousUrl();
                });
        }
    }

    deleteProduct(product) {
        this.isSavingInProgress = true;
        this._productService.delete(product)
            .subscribe(() => {
                this.isSavingInProgress = false;
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
            if (this.product && this.product.preRequisites && this.product.preRequisites.length > 0) {
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
            if (this.product && this.product.skillsToGain && this.product.skillsToGain.length > 0) {
                return this.product.skillsToGain.findIndex(s => s.id == skill.id);
            }
        }
        return -1;
    }

    readThumbnailUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            this.imageUrlFile = file;

            var reader = new FileReader();
            reader.onload = (event: any) => {
                let data = event.target.result;
                //console.log("event.target.result : " + data); 
                // this.thumbnailPicDisplay = data;
                this.product.imageUrl = data;
                this.isImageChanged = true;
            }

            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
    }
}