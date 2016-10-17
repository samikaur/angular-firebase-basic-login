import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminRoutingModule }       from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "../shared/admin.guard";
import {ListUsersComponent} from "./users/list/list.component";
import {EditUserComponent} from "./users/edit/edit.component";
import {FormsModule} from "@angular/forms";
import {AdminHomeComponent} from "./admin-home.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [AdminGuard]
})
export class AdminModule {}