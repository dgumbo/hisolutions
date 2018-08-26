import {BasicInterface} from "./interfaces";
import {ProductType} from "./product-type";
import {DistributionMethod} from "./distribution-method";
import {Topic} from "./topic";
import {PreRequisite} from "./pre-requisite";
import {Skill} from "./skill";
import {Audiance} from "./audiance";
import {Vendor} from "./vendor";
import {ServiceCategory} from "./service-category";
import {Benefit} from "shared/models/benefit";


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface Product extends BasicInterface {
    name: string;
    description?: string;
    imageUrl?: string;
    price?: number;
    serviceCategory?: ServiceCategory ;
    productType?: ProductType;
    vendor?: Vendor;
    audiances?: Audiance[];
    skillsToGain?: Skill[];
    benefits?: Benefit[];
    preRequisites?: PreRequisite[];
    courseTopics?: Topic[];
    distributionMethods?: DistributionMethod[];
    displayContent?: string;
}

