import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const USERS: User[] = [
  { id: '1', name: 'Simon Sample', email: 'simon.sample@notreal.com', admin: false },
  { id: '2', name: 'Admin', email: '', admin: true },
];

@Injectable()
export class UserService {
  getUsers(): Observable<User[]> {
    return Observable.of(USERS);
  }
}
