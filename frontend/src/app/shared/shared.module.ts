import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NoAccessComponent} from './components/error-pages/no-access/no-access.component';
import {RequestNotFoundComponent} from './components/error-pages/request-not-found/request-not-found.component';
import {ProductTypeService} from './services/rest/product-type.service';
import {ProductService} from './services/rest/product.service';
import {PreRequisiteService} from './services/rest/pre-requisite.service';
import {VendorService} from './services/rest/vendor.service';
import {AudianceService} from './services/rest/audiance.service';
import {SkillService} from './services/rest/skill.service';
import {TopicService} from './services/rest/topic.service';
import {DistributionMethodService} from './services/rest/distribution-method.service';
import {ServiceCategoryService} from './services/rest/service-category.service';
import {FileUploadService} from './services/file-upload.service';
import {SharedGlobals} from './shared-globals';
import {AppErrorHandler} from './components/error-pages/app-error-handler';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//import { FadeInOut } from './components/animations/fade-in-out';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
        RequestNotFoundComponent, 
        NoAccessComponent
         ],
  exports: [
        CommonModule,
        FormsModule,
    
        RequestNotFoundComponent, 
        NoAccessComponent ],
  providers: [  
        ProductTypeService,
        ProductService,
        VendorService,
        PreRequisiteService,
        AudianceService,
        TopicService,
        SkillService,
        DistributionMethodService,
        ServiceCategoryService,
        FileUploadService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        SharedGlobals ]
})
export class SharedModule { }
