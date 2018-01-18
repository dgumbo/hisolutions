import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AlertModule} from 'ngx-bootstrap/alert';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ContentComponent} from './content/content.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AccountComponent} from './account/account.component';
import {SignupComponent} from './signup/signup.component';
import {BlogComponent} from './blog/blog.component';
import {AccountService} from './common/services/accounts.service';
import {BlogService} from './common/services/blogs.service';
import {AppErrorHandler} from './common/app-error-handler';
import {RequestNotFoundComponent} from './request-not-found/request-not-found.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { AccountViewComponent } from './account/account-view/account-view.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        SideBarComponent,
        ContentComponent,
        NavBarComponent,
        AccountComponent,
        SignupComponent,
        BlogComponent,
        RequestNotFoundComponent,
        AccountFormComponent,
        AccountViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'Blogs', component: BlogComponent },
            { path: 'Account/new', component: AccountFormComponent },
            { path: 'Account/:id', component: AccountViewComponent },
            { path: 'Account/:id/edit', component: AccountFormComponent },
            { path: 'Accounts', component: AccountComponent },
            { path: '**', component: RequestNotFoundComponent }
        ])
    ],
    providers: [
        AccountService,
        BlogService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})



export class AppModule {}
