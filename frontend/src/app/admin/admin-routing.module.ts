import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';  
import {ProductsComponent} from './components/products/products.component';
import {ProductFormComponent} from './components/products/product-form/product-form.component';
import {ProductTypesComponent} from './components/product-types/product-types.component';
import {ProductTypeFormComponent} from './components/product-types/product-type-form/product-type-form.component';
import {PreRequisitesComponent} from './components/pre-requisites/pre-requisites.component';
import {PreRequisiteFormComponent} from './components/pre-requisites/pre-requisite-form/pre-requisite-form.component';
import {SkillsComponent} from './components/skills/skills.component';
import {SkillFormComponent} from './components/skills/skill-form/skill-form.component';
import {AudiancesComponent} from './components/audiances/audiances.component';
import {AudianceFormComponent} from './components/audiances/audiance-form/audiance-form.component';
import {TopicsComponent} from './components/topics/topics.component';
import {TopicFormComponent} from './components/topics/topic-form/topic-form.component';
import {DistributionMethodsComponent} from './components/distribution-methods/distribution-methods.component';
import {DistributionMethodFormComponent} from './components/distribution-methods/distribution-method-form/distribution-method-form.component';
import {ServiceCategoryComponent} from './components/service-category/service-category.component';
import {ServiceCategoryFormComponent} from './components/service-category/service-category-form/service-category-form.component';

const adminRoutes: Routes = [ 

    /* Service Categories */
    {path: 'admin/servicecategories', component: ServiceCategoryComponent},
    {path: 'admin/servicecategories/new', component: ServiceCategoryFormComponent},
    {path: 'admin/servicecategories/:id', component: ServiceCategoryFormComponent}, 
 
    /* Product */
    {path: 'admin/products', component: ProductsComponent},
    {path: 'admin/products/new', component: ProductFormComponent},
    {path: 'admin/products/:id', component: ProductFormComponent},

    /* Product Type */
    {path: 'admin/producttypes', component: ProductTypesComponent},
    {path: 'admin/producttypes/new', component: ProductTypeFormComponent},
    {path: 'admin/producttypes/:id', component: ProductTypeFormComponent},

    /* Pre Requisites */
    {path: 'admin/prerequisites', component: PreRequisitesComponent},
    {path: 'admin/prerequisites/new', component: PreRequisiteFormComponent},
    {path: 'admin/prerequisites/:id', component: PreRequisiteFormComponent},

    /* Skills */
    {path: 'admin/skills', component: SkillsComponent},
    {path: 'admin/skills/new', component: SkillFormComponent},
    {path: 'admin/skills/:id', component: SkillFormComponent},

    /* Audiances */
    {path: 'admin/audiances', component: AudiancesComponent},
    {path: 'admin/audiances/new', component: AudianceFormComponent},
    {path: 'admin/audiances/:id', component: AudianceFormComponent},

    /* Topics */
    {path: 'admin/topics', component: TopicsComponent},
    {path: 'admin/topics/new', component: TopicFormComponent},
    {path: 'admin/topics/:id', component: TopicFormComponent},

    /* Distribution Methods */
    {path: 'admin/distributionmethods', component: DistributionMethodsComponent},
    {path: 'admin/distributionmethods/new', component: DistributionMethodFormComponent},
    {path: 'admin/distributionmethods/:id', component: DistributionMethodFormComponent},
 
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule], 
})

export class AdminRoutingModule {}
