
import {Component, OnInit, ViewChild} from '@angular/core'; 
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {IAccount} from '../common/interfaces';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
import {BadInputError} from '../common/bad-input-error';
import {AccountService} from '../common/services/accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit { 
    accounts;  
    private accountService: AccountService;
    
    //@ViewChild('account') accountForm: NgForm;

    constructor(accountService: AccountService, private router: Router) {
        this.accountService = accountService;
    }

    ngOnInit() {
        this.getAllAccounts();
    }
    
    getAllAccounts(){        
        this.accountService.getAll()
            .subscribe(accounts => this.accounts = accounts) ;
    }

    updateAccount(account: HTMLInputElement) {
        this.accountService.update(account)
            .subscribe(response => console.log(response));
    }

    deleteAccount(account: HTMLInputElement) {
        const index = this.accounts.indexOf(account);
        this.accounts.splice(index, 1);

        this.accountService.delete(account)
            .subscribe(
            null,
            (error: AppError) => {
                this.accounts.splice(index, 0, account);

                if (error instanceof NotFoundError)
                    alert('Account has already been deleted.');
                else throw error;
            });
    }
}


//
