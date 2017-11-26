import { AuthGuard } from './../shared/guards/auth.guard';
import { SensorsComponent } from './sensors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sensors', component: SensorsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
