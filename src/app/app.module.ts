import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { config } from './config/config';

import { ListComponent } from './sensors/list/list.component';
import { LoginComponent } from './login/login.component';
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import {AdminModule} from "./admin/admin.module";
import {LocalStorageService} from "./shared/services/localstorage.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config.FIREBASE_CONFIG, config.FIREBASE_AUTH_CONFIG),
    MomentModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, AuthService, AuthGuard, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
