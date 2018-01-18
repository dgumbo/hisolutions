/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IAccount {
    id?: number;
    username: string;
    password: string;
    active: boolean; 
    locked: boolean;
    accountExpired?: boolean;
    credentialsExpired?: boolean; 
    blogs?: IBlog[];
}

export interface IBlog {
    id?: number;
    title: string;
    content: string;
} 