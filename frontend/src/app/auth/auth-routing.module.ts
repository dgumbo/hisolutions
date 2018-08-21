import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';  
import {UsersComponent} from 'auth/components/users/users.component'; 
import {AuthHomeComponent, LoginComponent, LogoutComponent} from 'auth/components';

const routes: Routes = [ 
    {
        path: '',
        component: AuthHomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}

export const authModuleRoutedComponents = [
    LoginComponent,
    LogoutComponent,
    AuthHomeComponent,  
    UsersComponent,
]