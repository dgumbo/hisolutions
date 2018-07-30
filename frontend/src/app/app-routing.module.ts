import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router'; 
import {LocationStrategy, HashLocationStrategy} from '@angular/common'; 
import {NoAccessComponent} from './shared/components/error-pages/no-access/no-access.component';
import {RequestNotFoundComponent} from './shared/components/error-pages/request-not-found/request-not-found.component';


const appRoutes: Routes = [
    /* Error Handlers */
    {path: 'no-access', component: NoAccessComponent},
    {path: '**', component: RequestNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppRoutingModule {}

export const routedComponents = [
    NoAccessComponent,
    RequestNotFoundComponent,
];