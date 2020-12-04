import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutHomeComponent} from './about-home/about-home.component'
import {RegisterComponent} from "./register/register.component"
import {LoginComponent} from './login/login.component'
import { ForgetpasswordComponent} from './forgetpassword/forgetpassword.component'
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'abouthome', component: AboutHomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget', component: ForgetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
