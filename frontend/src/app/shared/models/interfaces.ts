/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 

export interface BasicInterface {
    id?: number;
    createdByUser?: string;
    creationTime?: Date;
    modifiedByUser?: string; 
    modificationTime?: Date;
    activeStatus?: boolean;
    version?: number;  
} 