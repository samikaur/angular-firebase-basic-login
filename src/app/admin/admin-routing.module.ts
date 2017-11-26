import { AdminGuard } from './../shared/guards/admin.guard';
import { AuthGuard } from './../shared/guards/auth.guard';
import { UserComponent } from './containers/user.component';
import { UsersComponent } from './containers/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard, AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard, AdminGuard],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
