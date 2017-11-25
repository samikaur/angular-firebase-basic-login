import { UserEffects } from './effects/user.effect';
import { UserService } from './services/user.service';
import { UserViewComponent } from './components/user-view.component';
import { UsersListViewComponent } from './components/users-list-view.component';
import { SharedModule } from './../shared/shared.module';
import { UserComponent } from './containers/user.component';
import { UsersComponent } from './containers/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserService
  ],
  declarations: [
    UsersListViewComponent,
    UserViewComponent,
    UsersComponent,
    UserComponent
  ]
})
export class AdminModule { }
