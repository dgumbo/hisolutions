import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FileUploadService} from 'shared/services/file-upload.service';
import {ServiceCategory} from 'shared/models/service-category';
import {ServiceCategoryService} from 'admin/services/rest/service-category.service';
import {Globals} from 'app/globals';

import 'shared/services/ckeditor.loader';
import 'ckeditor';

import {combineLatest} from 'rxjs';
import {PreviousRouteService} from 'shared/services';

@Component({
    selector: 'app-service-category-form',
    templateUrl: './service-category-form.component.html',
    styleUrls: ['./service-category-form.component.scss']
})
export class ServiceCategoryFormComponent implements OnInit, OnDestroy {
    id: String;

    ngOnDestroy(): void {
    }

    ngOnInit() {
        //        if (!this.globals.isCkEditorJsLoaded){
        //            this.scriptService.load('ckeditor-basic')
        //                .then(data => { 
        //                //console.log('script loaded : ', data[0].lo        aded); 
        //                this.globals.isCkEditorJsLoaded = data[0].loaded;
        //            }).catch(error => console.log(error) );
        //        }

        //        if (!this.globals.isCkEditorJsLoaded){
        //            this.scriptService.loadScript('quill-js')
        //                .then(data => { 
        //                console.log('script loaded : ', data ); 
        //                //this.globals.isCkEditorJsLoaded = data[0].loaded;
        //                 
        //                var editor = new Quill('#editor', {
        //                    modules: {
        //                      toolbar: [
        //                        [{ header: [1, 2, false] }],
        //                        ['bold', 'italic', 'underline'],
        //                        ['image', 'code-block']
        //                      ]
        //                    },
        //                    placeholder: 'Compose an epic...',
        //                    theme: 'snow'
        //                });
        //                
        //            }).catch(error => console.log(error) );
        //        }
    }


    backgroundImagePicDisplay: any;
    thumbnailPicDisplay: any;

    backgroundImagePicFile: File;
    thumbnailPicFile: File;

    //id: string;
    serviceCategory: ServiceCategory;

    isNewForm: boolean = true;

    showSpinner: boolean;
    //picFile: string;

    ckeditorContent: string = '';

    showBackgroundImageSpinner: any;
    showThumbnailSpinner: any;

    constructor(private _serviceCategoryService: ServiceCategoryService,
        //private scriptService: ScriptService,
        private activeRoute: ActivatedRoute,
        private previousRoute: PreviousRouteService,
        private _fileUploaderService: FileUploadService,
        public globals: Globals
    ) {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.serviceCategory = {name: ""};

        if (this.id) {
            this.getServiceCategory(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }

    saveServiceCategory(serviceCategory: ServiceCategory) {
        this.showSpinner = true;
        let backgroundImageSubscription;//:Observable<any>;
        let thumbnailSubscription;//:Observable<any>;
        console.log("Now Starting Upload of Files");
        if (this.thumbnailPicFile) {
            thumbnailSubscription = this._fileUploaderService.uploadFileToStorage(this.thumbnailPicFile);

        }
        if (this.backgroundImagePicFile) {
            backgroundImageSubscription = this._fileUploaderService.uploadFileToStorage(this.backgroundImagePicFile);
        }
        //console.log("Now Working With Observables");

        //let finalSub = combineLatest(thumbnailSubscription, backgroundImageSubscription);
        let finalSub = combineLatest(thumbnailSubscription, backgroundImageSubscription, (thumbnail: any, background: any) => {return {thumb: thumbnail, back: background}});

        finalSub.subscribe(result => {

            serviceCategory.thumbnailMetadata = JSON.parse(result.thumb);//result[0];
            //console.log("Finished Upload of File : " + serviceCategory.thumbnailMetadata.filename + "\n" + serviceCategory.thumbnailMetadata);

            serviceCategory.imageMetadata = JSON.parse(result.back);//result[1];
            //console.log("Finished Upload of File : " + serviceCategory.imageMetadata.filename + "\n" + serviceCategory.imageMetadata);

            //console.log("\n\n" + JSON.stringify(serviceCategory) + "\n\n");
            if (this.isNewForm) {
                this._serviceCategoryService.create(serviceCategory)
                    .subscribe(() => {
                        this.previousRoute.navigatePreviousUrl();
                    });
            }
            else {
                this._serviceCategoryService.update(this.id, serviceCategory)
                    .subscribe(() => {
                        this.previousRoute.navigatePreviousUrl();
                    });
            }
        });

        this.showSpinner = false;
    }

    getServiceCategory(id: any) {
        this._serviceCategoryService.get(id)
            .subscribe((sc: ServiceCategory) => {
                this.serviceCategory = sc;
                this.isNewForm = false;
                this.loadServiceCategoryImages(this.serviceCategory);
            });
    }

    loadServiceCategoryImages(serviceCategory: ServiceCategory) {
        if (serviceCategory) {
            if (serviceCategory.imageMetadata)
                this.backgroundImagePicDisplay = this.globals.hostUrl + '/storage/view/' + serviceCategory.imageMetadata.filename;

            if (serviceCategory.thumbnailMetadata)
                this.thumbnailPicDisplay = this.globals.hostUrl + '/storage/view/' + serviceCategory.thumbnailMetadata.filename;
        }
    }

    readBackgroungImageUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            this.backgroundImagePicFile = file;

            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.backgroundImagePicDisplay = event.target.result;
            }

            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
    }

    readThumbnailUrl(event: any) {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            this.thumbnailPicFile = file;

            var reader = new FileReader();
            reader.onload = (event: any) => {
                let data = event.target.result;
                //console.log("event.target.result : " + data); 
                this.thumbnailPicDisplay = data;
            }

            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
    }
}
