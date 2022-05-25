import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {UsersComponent} from './user/users/users.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {ViewUserComponent} from './user/view-user/view-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from './auth/auth.component';
import {NavComponent} from './nav/nav.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthtokenInterceptor} from "./auth/authtoken.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    UsersComponent,
    CreateUserComponent,
    ViewUserComponent,
    AuthComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthtokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
