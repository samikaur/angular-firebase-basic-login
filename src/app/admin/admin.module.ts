import { UserViewComponent } from './components/user-view.component';
import { UsersListViewComponent } from './components/users-list-view.component';
import { SharedModule } from './../shared/shared.module';
import { UserComponent } from './containers/user.component';
import { UsersComponent } from './containers/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    UsersListViewComponent,
    UserViewComponent,
    UsersComponent,
    UserComponent
  ]
})
export class AdminModule { }
