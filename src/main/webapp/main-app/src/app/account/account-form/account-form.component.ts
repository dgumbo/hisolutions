import {Component, OnInit} from '@angular/core';
import {AccountComponent} from '../account.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AccountService} from '../../common/services/accounts.service';
import {IAccount} from '../../common/interfaces';
import {BadInputError} from '../../common/bad-input-error';

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent  implements OnInit{
    account: any = {};
    acc: any = {};
    createorupdate:string ;
    updateid:string ;
//    form;

    constructor(fb: FormBuilder
        , private accountService: AccountService
        , private router: Router
        , private activatedRoute: ActivatedRoute) {
   
//        this.form = fb.group({
//            name: ['', Validators.required],
//            contact: fb.group({
//                email: [],
//                phone: []
//            }),
//            topics: fb.array([])
//            
//    id?: number;
//    username: string;
//    password: string;
//    active: boolean; 
//    locked: boolean;
//    accountExpired?: boolean;
//    credentialsExpired?: boolean; 
//        });
    }


    ngOnInit() {
        this.activatedRoute.paramMap
            .subscribe(params => {                
                if (params.has('id')){
                    this.createorupdate = "update";
                    this.updateid = params.get('id');
                    
                    this.getAccount(this.updateid);
                }
            });
    }    
    
    getAccount(id: string){        
        this.accountService.get(id)
            .subscribe(resource => {
                this.acc = resource;
               // this.account = resource;
                //alert(JSON.stringify(this.account)) ;
            });                    
    }

    createAccount(account: IAccount) { 
        this.accountService.create(account)
            .subscribe((data: any) => {
              account.id = data.id;
            },
            (error: Response) => {
                if (error instanceof BadInputError)
                    // this.form.setErrors(error.originalError);
                    alert(error.originalError.message);
                else throw error;
            });
             
       // this.router.navigate(['/Accounts']);
    }

}


