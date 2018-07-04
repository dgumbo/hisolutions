import {BasicInterface} from "./interfaces"; 
import {DocumentMetadata} from "./document-metadata";
import {Product} from "./product";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface ServiceCategory extends BasicInterface {
    name: string;
    shortDescription?: string;
    description?: string;
    displayContent?: string;
    imageMetadata?: DocumentMetadata;
    thumbnailMetadata?: DocumentMetadata; 
    faIcon?: string; 
}

