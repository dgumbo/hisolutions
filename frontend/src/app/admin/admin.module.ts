import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, adminModuleRoutedComponents} from './admin-routing.module';
import {SharedModule} from 'shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductTypeService} from 'admin/services/rest/product-type.service';
import {ProductService} from 'admin/services/rest/product.service';
import {FileUploadService} from 'shared/services/file-upload.service';
import {ServiceCategoryService} from 'admin/services/rest/service-category.service';
import {DistributionMethodService} from 'admin/services/rest/distribution-method.service';
import {SkillService} from 'admin/services/rest/skill.service';
import {TopicService} from 'admin/services/rest/topic.service';
import {AudianceService} from 'admin/services/rest/audiance.service';
import {PreRequisiteService} from 'admin/services/rest/pre-requisite.service';
import {VendorService} from 'admin/services/rest/vendor.service';
import {AuthModule} from '../auth/auth.module'; 
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenStorage} from 'auth/storage/token.storage';
import {JwtInterceptor} from 'auth/interceptors';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,

        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        
        AuthModule,
    ],
    declarations: [
        ...adminModuleRoutedComponents,
        AdminHomeComponent
    ],
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ]
})
export class AdminModule {}
