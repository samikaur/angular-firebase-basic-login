import { SensorsModule } from './sensors/sensors.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    AdminModule,
    SensorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
