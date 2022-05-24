import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UsersComponent } from './user/users/users.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AuthComponent } from './auth/auth.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    UsersComponent,
    CreateUserComponent,
    ViewUserComponent,
    AuthComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
