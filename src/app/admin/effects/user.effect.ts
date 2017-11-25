import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as userAction from '../actions/user.action';
import { User } from '../models/user.model';
import { UserService } from './../services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(userAction.LOAD)
    .switchMap(() => {
      return this.userService.getUsers()
        .map((users: User[]) => new userAction.LoadComplete(users));
    });

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
