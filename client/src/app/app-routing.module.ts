import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import { LoginPageComponent } from './login-page/login-page.component';
// import { from } from 'rxjs';

const routes: Routes= [
    {path:'login', component: LoginPageComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}