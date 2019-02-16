import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileUploadService } from 'shared/services/file-upload.service';
import { ServiceCategory } from 'shared/models/service-category';
import { ServiceCategoryService } from 'admin/services/rest/service-category.service';
import { Globals } from 'app/globals';

import 'shared/services/ckeditor.loader';
import 'ckeditor';

import { combineLatest } from 'rxjs';
import { PreviousRouteService } from 'shared/services';
import { CatchPhrase } from 'shared/models/catch-phrase';

declare var $: any;

@Component({
    selector: 'app-service-category-form',
    templateUrl: './service-category-form.component.html',
    styleUrls: ['./service-category-form.component.scss']
})
export class ServiceCategoryFormComponent implements OnInit, OnDestroy {
    @Input() data;
    id: String;

    backgroundImagePicDisplay: any;
    thumbnailPicDisplay: any;

    backgroundImagePicFile: File;
    thumbnailPicFile: File;

    backgroundImagePicChanged: boolean;
    thumbnailPicChanged: boolean;

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
        this.serviceCategory = { name: '' };

        if (this.id) {
            this.getServiceCategory(this.id);
        } else {
            this.isNewForm = true;
        }
    }

    ngOnDestroy(): void {
    }

    updateCatchPhrase() {
        let phrase_id = $('#update_button').attr('value');
        //        console.log('phrase_id : ', phrase_id) ;

        let phrase = $('#catch-phrase').val();

        let catchPhrase: CatchPhrase = this.serviceCategory.catchPhrases
            .filter(cp => cp != null)
            .find(s => s.id === phrase_id);

        if (catchPhrase)
            catchPhrase.phrase = phrase;

        // this.serviceCategory.catchPhrases.push({phrase: phrase})
        var modal = $('#CatchPhraseModal');

        modal.modal('toggle');
        modal.find('#add_button').removeClass('d-none');
    }

    addCatchPhrase() {
        let phrase = $('#catch-phrase').val();
        let newPhrase: CatchPhrase = { phrase: phrase };

        this.serviceCategory.catchPhrases.push(newPhrase)

        var modal = $('#CatchPhraseModal');

        modal.modal('toggle');
        modal.find('#update_button').removeClass('d-none');
    }

    removeCatchPhrase(event) {
        var button = $(event.target);
        // console.log(button) ;  

        var titleAttr = button.attr('value');
        var phrase: CatchPhrase = titleAttr ? JSON.parse(titleAttr) : null;

        let catchPhrase: CatchPhrase = this.serviceCategory.catchPhrases
            .filter(cp => cp != null)
            .find(s => s.id == phrase.id);

        let index = this.serviceCategory.catchPhrases.indexOf(catchPhrase);
        this.serviceCategory.catchPhrases.splice(index, 1);
    }

    ngOnInit() {

        $('#CatchPhraseModal').on('show.bs.modal', function (event) {
            var modal = $(this);
            var button = $(event.relatedTarget) // Button that triggered the modal
            //
            var titleAttr = button.attr('value');
            var catchPhrase: CatchPhrase = titleAttr ? JSON.parse(titleAttr) : null;


            if (catchPhrase) {
                // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                var phrase = catchPhrase.phrase ? catchPhrase.phrase : '';
                var phrase_id = catchPhrase.phrase ? catchPhrase.id : 0;
                modal.find('.modal-title').text('Modify Catch Phrase : ');
                modal.find('.modal-body input').val(phrase);
                modal.find('#add_button').addClass('d-none');
                modal.find('#update_button').attr('value', phrase_id);
            }
            else {
                modal.find('.modal-title').text('Add New Catch Phrase to Service Category : ');
                modal.find('.modal-body input').val('');
                modal.find('#update_button').addClass('d-none');
            }
        });


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

    saveServiceCategory(serviceCategory: ServiceCategory) {
        this.showSpinner = true;
        let backgroundImageSubscription;//:Observable<any>;
        let thumbnailSubscription;//:Observable<any>;
        if (this.thumbnailPicChanged && this.thumbnailPicFile) {
            thumbnailSubscription = this._fileUploaderService.uploadFileToStorage(this.thumbnailPicFile);

        }
        if (this.backgroundImagePicChanged && this.backgroundImagePicFile) {
            backgroundImageSubscription = this._fileUploaderService.uploadFileToStorage(this.backgroundImagePicFile);
        }
        //console.log('Now Working With Observables');

        if (this.thumbnailPicChanged && this.backgroundImagePicChanged) {
            let finalSub = combineLatest(thumbnailSubscription, backgroundImageSubscription, (thumbnail: any, background: any) => {
                console.log('Now Starting Upload of Files');
                return { thumb: thumbnail, back: background }
            });
            finalSub.subscribe(result => {
                serviceCategory.thumbnailMetadata = JSON.parse(result.thumb);// result[0];                
                serviceCategory.imageMetadata = JSON.parse(result.back);// result[1]; 

                this.doSave(serviceCategory);
            });
        }        else {
            this.doSave(serviceCategory);
        }

        this.showSpinner = false;
    }

    doSave(serviceCategory: ServiceCategory) {
        //console.log('\n\n' + JSON.stringify(serviceCategory) + '\n\n');
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
                //console.log('event.target.result : ' + data); 
                this.thumbnailPicDisplay = data;
            }

            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
    }
}
