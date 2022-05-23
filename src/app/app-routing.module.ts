import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./user/users/users.component";
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'user/create', component: CreateUserComponent},
  {path: 'user/:id', component: ViewUserComponent},
  {path: 'user/edit/:id', component: EditUserComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
