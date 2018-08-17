import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {DistributionMethodFormComponent} from 'admin/components/distribution-methods/distribution-method-form/distribution-method-form.component';
import {DistributionMethodsComponent} from 'admin/components/distribution-methods/distribution-methods.component';
import {TopicFormComponent} from 'admin/components/topics/topic-form/topic-form.component';
import {TopicsComponent} from 'admin/components/topics/topics.component';
import {AudianceFormComponent} from 'admin/components/audiances/audiance-form/audiance-form.component';
import {AudiancesComponent} from 'admin/components/audiances/audiances.component';
import {SkillFormComponent} from 'admin/components/skills/skill-form/skill-form.component';
import {SkillsComponent} from 'admin/components/skills/skills.component';
import {PreRequisiteFormComponent} from 'admin/components/pre-requisites/pre-requisite-form/pre-requisite-form.component';
import {PreRequisitesComponent} from 'admin/components/pre-requisites/pre-requisites.component';
import {ProductTypeFormComponent} from 'admin/components/product-types/product-type-form/product-type-form.component';
import {ProductTypesComponent} from 'admin/components/product-types/product-types.component';
import {ProductFormComponent} from 'admin/components/products/product-form/product-form.component';
import {ProductTypeViewComponent} from 'admin/components/product-types/product-type-view/product-type-view.component';
import {PreRequisiteViewComponent} from 'admin/components/pre-requisites/pre-requisite-view/pre-requisite-view.component';
import {SkillViewComponent} from 'admin/components/skills/skill-view/skill-view.component';
import {AudianceViewComponent} from 'admin/components/audiances/audiance-view/audiance-view.component';
import {VendorsComponent} from 'admin/components/vendors/vendors.component';
import {VendorViewComponent} from 'admin/components/vendors/vendor-view/vendor-view.component';
import {TopicViewComponent} from 'admin/components/topics/topic-view/topic-view.component';
import {VendorFormComponent} from 'admin/components/vendors/vendor-form/vendor-form.component';
import {ServiceCategoryFormComponent} from 'admin/components/service-category/service-category-form/service-category-form.component';
import {ServiceCategoryComponent} from 'admin/components/service-category/service-category.component';
import {DistributionMethodViewComponent} from 'admin/components/distribution-methods/distribution-method-view/distribution-method-view.component';

const adminModuleRoutes: Routes = [ 
    /* Service Categories */
    {path: 'servicecategories', component: ServiceCategoryComponent},
    {path: 'servicecategories/new', component: ServiceCategoryFormComponent},
    {path: 'servicecategories/:id', component: ServiceCategoryFormComponent}, 
 
    /* Product */
    {path: 'products', component: ProductsComponent},
    {path: 'products/new', component: ProductFormComponent},
    {path: 'products/:id', component: ProductFormComponent},

    /* Product Type */
    {path: 'producttypes', component: ProductTypesComponent},
    {path: 'producttypes/new', component: ProductTypeFormComponent},
    {path: 'producttypes/:id', component: ProductTypeFormComponent},

    /* Pre Requisites */
    {path: 'prerequisites', component: PreRequisitesComponent},
    {path: 'prerequisites/new', component: PreRequisiteFormComponent},
    {path: 'prerequisites/:id', component: PreRequisiteFormComponent},

    /* Skills */
    {path: 'skills', component: SkillsComponent},
    {path: 'skills/new', component: SkillFormComponent},
    {path: 'skills/:id', component: SkillFormComponent},

    /* Audiances */
    {path: 'audiances', component: AudiancesComponent},
    {path: 'audiances/new', component: AudianceFormComponent},
    {path: 'audiances/:id', component: AudianceFormComponent},

    /* Topics */
    {path: 'topics', component: TopicsComponent},
    {path: 'topics/new', component: TopicFormComponent},
    {path: 'topics/:id', component: TopicFormComponent},

    /* Distribution Methods */
    {path: 'distributionmethods', component: DistributionMethodsComponent},
    {path: 'distributionmethods/new', component: DistributionMethodFormComponent},
    {path: 'distributionmethods/:id', component: DistributionMethodFormComponent},
 
];


@NgModule({
  imports: [RouterModule.forChild(adminModuleRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminModuleRoutedComponents = [    
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
   ServiceCategoryFormComponent
]
