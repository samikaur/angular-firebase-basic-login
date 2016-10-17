import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './sensors/list/list.component';
import {AuthGuard} from "./shared/auth.guard";

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sensors'
  },
  {
    path: 'sensors',
    canActivate: [AuthGuard],
    component: ListComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }