import { LoginComponent } from './containers/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './components/login-view.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginViewComponent,
    LoginComponent
  ]
})
export class LoginModule { }
