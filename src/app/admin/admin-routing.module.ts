import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AdminHomeComponent} from "./admin-home.component";
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "../shared/admin.guard";
import {ListUsersComponent} from "./users/list/list.component";
import {AuthGuard} from "../shared/auth.guard";
import {EditUserComponent} from "./users/edit/edit.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard, AdminGuard],
            children: [
              { path: 'users', component: ListUsersComponent },
              { path: 'user/:id', component: EditUserComponent },
              { path: '', component: AdminHomeComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}