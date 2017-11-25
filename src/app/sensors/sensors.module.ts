import { SharedModule } from './../shared/shared.module';
import { SensorsComponent } from './sensors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsRoutingModule } from './sensors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SensorsRoutingModule,
    SharedModule
  ],
  declarations: [
    SensorsComponent
  ]
})
export class SensorsModule { }
