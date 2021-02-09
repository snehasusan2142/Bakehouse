import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {UserhomesinglecakeComponent} from './userhomesinglecake/userhomesinglecake.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import { UseraddressComponent } from './useraddress/useraddress.component';
import { PayementsuComponent } from './payementsu/payementsu.component';
import { AdmincheckstockComponent } from './admincheckstock/admincheckstock.component';
import { AdminupdatecakeComponent } from './adminupdatecake/adminupdatecake.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:"signup",component:SigninComponent},
{path:"login",component:LoginComponent},
{path:"home",component:UserHomeComponent},
{path:"admin/home/updatecake/:id",component:UserhomesinglecakeComponent},
{path:"adminlogin",component:AdminloginComponent},
{path:"admin/home",component:AdminHomeComponent},
{path:"home/adrs",component:UseraddressComponent},
{path:"home/adrs/payementsuccess",component:PayementsuComponent},
{path:"admin/home/stock",component:AdmincheckstockComponent},
{path:"admin/home/updatecake",component:AdminupdatecakeComponent},
{path:"contactus",component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
