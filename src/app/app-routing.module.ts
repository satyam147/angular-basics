import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./user/users/users.component";
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'user/create', component: CreateUserComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: ViewUserComponent, canActivate: [AuthGuard]},
  {path: 'user/edit/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
