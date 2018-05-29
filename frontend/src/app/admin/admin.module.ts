import { NgModule } from '@angular/core'; 
import {AdminGlobals} from './admin-globals';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {ServiceCategoryFormComponent} from './components/service-category/service-category-form/service-category-form.component';
import {ServiceCategoryComponent} from './components/service-category/service-category.component';
import {DistributionMethodFormComponent} from './components/distribution-methods/distribution-method-form/distribution-method-form.component';
import {DistributionMethodsComponent} from './components/distribution-methods/distribution-methods.component';
import {TopicFormComponent} from './components/topics/topic-form/topic-form.component';
import {TopicsComponent} from './components/topics/topics.component';
import {AudianceFormComponent} from './components/audiances/audiance-form/audiance-form.component';
import {AudiancesComponent} from './components/audiances/audiances.component';
import {SkillFormComponent} from './components/skills/skill-form/skill-form.component';
import {SkillsComponent} from './components/skills/skills.component';
import {PreRequisiteFormComponent} from './components/pre-requisites/pre-requisite-form/pre-requisite-form.component';
import {PreRequisitesComponent} from './components/pre-requisites/pre-requisites.component';
import {ProductTypeFormComponent} from './components/product-types/product-type-form/product-type-form.component';
import {ProductTypesComponent} from './components/product-types/product-types.component';
import {ProductFormComponent} from './components/products/product-form/product-form.component';
import {ProductsComponent} from './components/products/products.component';
import {AudianceViewComponent} from './components/audiances/audiance-view/audiance-view.component';
import {DistributionMethodViewComponent} from './components/distribution-methods/distribution-method-view/distribution-method-view.component';
import {TopicViewComponent} from './components/topics/topic-view/topic-view.component';
import {SkillViewComponent} from './components/skills/skill-view/skill-view.component';
import {PreRequisiteViewComponent} from './components/pre-requisites/pre-requisite-view/pre-requisite-view.component';
import {ProductTypeViewComponent} from './components/product-types/product-type-view/product-type-view.component';
import {VendorFormComponent} from 'admin/components/vendors/vendor-form/vendor-form.component';
import {VendorViewComponent} from 'admin/components/vendors/vendor-view/vendor-view.component';
import {VendorsComponent} from 'admin/components/vendors/vendors.component';
 
@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule 
  ],
  declarations: [
    /* Product */
   ProductsComponent,
   ProductFormComponent,
   ProductTypesComponent,
   ProductTypeFormComponent,
   ProductTypeViewComponent,
   PreRequisitesComponent,
   PreRequisiteFormComponent,
   PreRequisiteViewComponent,
   SkillsComponent,
   SkillFormComponent,
   SkillViewComponent,
   AudiancesComponent,
   AudianceViewComponent,
   AudianceFormComponent,
   VendorsComponent,
   VendorViewComponent,
   VendorFormComponent,
   TopicsComponent,
   TopicFormComponent,
   TopicViewComponent,
   DistributionMethodsComponent,
   DistributionMethodFormComponent,
   DistributionMethodViewComponent,
   ServiceCategoryComponent,
   ServiceCategoryFormComponent ],
    providers: [ 
        AdminGlobals
    ]
})
export class AdminModule { }
