import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as userAction from '../actions/user.action';

@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-users-list-view [users]="users$ | async"></app-users-list-view>
  `
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.users$ = this.store.select(fromRoot.getAllUsers);
    this.store.dispatch(new userAction.Load());
  }

}
