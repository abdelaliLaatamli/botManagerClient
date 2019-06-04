import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './AdminPanel/admin.module';


import { Page404Component } from './pages/page404/page404.component';
import { AuthComponent } from './home/auth/auth.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { RegisterComponent } from './home/auth/register/register.component';
import { NavbarComponent } from './home/partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule ,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
