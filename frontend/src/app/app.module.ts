// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {CakeservicesService} from "./cakeservices.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserhomesinglecakeComponent } from './userhomesinglecake/userhomesinglecake.component'
import { MaterialModule } from './material/material.module';
import { CartComponent } from './cart/cart.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { OrderspageComponent } from './orderspage/orderspage.component';
import { ManageshopComponent } from './manageshop/manageshop.component';
import { ManagecustomerComponent } from './managecustomer/managecustomer.component';
import { UseraddressComponent } from './useraddress/useraddress.component';
import { PayementsuComponent } from './payementsu/payementsu.component';
import { AdmincheckstockComponent } from './admincheckstock/admincheckstock.component';
import { AdminupdatecakeComponent } from './adminupdatecake/adminupdatecake.component';
import { LoginpopComponent } from './loginpop/loginpop.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminHomeComponent,
    UserHomeComponent,
    SigninComponent,
    LoginComponent,
    AdminloginComponent,
    UserhomesinglecakeComponent,
    CartComponent,
    SidenavComponent,
    TabsComponent,
    OrderspageComponent,
    ManageshopComponent,
    ManagecustomerComponent,
    UseraddressComponent,
    PayementsuComponent,
    AdmincheckstockComponent,
    AdminupdatecakeComponent,
    LoginpopComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,ReactiveFormsModule,HttpClientModule, 
    BrowserAnimationsModule,MaterialModule,FormsModule
  ],
  providers: [CakeservicesService,MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
