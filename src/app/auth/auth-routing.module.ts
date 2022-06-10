import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotComponent } from './pages/forgot/forgot.component';


const routes: Routes = [
  { path: '' ,
  children:[
    { path: 'forgot', component: ForgotComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login'},

  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
