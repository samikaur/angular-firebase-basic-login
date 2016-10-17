import { Injectable } from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders} from 'angularfire2';
import {UserService, IUser, UserUid, UserAdmin, UserName} from "./user.service";
import {Observable} from "rxjs";
import {LocalStorageService} from "./localstorage.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthService {
  constructor(
    public af: AngularFire,
    public userService: UserService
  ) { }

  isAuthenticated(): Observable<boolean> {
    return this.af.auth.map((auth) =>  {
      return auth !== null;
    }).first();
  }

  isAdmin(): boolean {
    return LocalStorageService.getBooleanItem(UserAdmin);
  }

  login(provider: string): Observable<IUser> {
    let vm = this;
    return Observable.create(function (subscriber) {
      vm.af.auth
        .login({
          provider: AuthProviders[provider],
          method: AuthMethods.Popup,
        }).then((authUser) => {
        let user = vm.userService.getUser(authUser.uid);
        user.subscribe((userObject : IUser) => {
          if (!userObject.$exists()) {
            vm.userService.addUser(authUser).then(() => {
              LocalStorageService.setStringItem(UserUid, authUser.uid);
              LocalStorageService.setStringItem(UserName, authUser.auth.displayName);
              LocalStorageService.setBooleanItem(UserAdmin, false);
              subscriber.next(userObject);
              subscriber.complete();
            });
          } else {
            LocalStorageService.setStringItem(UserUid, authUser.uid);
            LocalStorageService.setStringItem(UserName, userObject.name);
            LocalStorageService.setBooleanItem(UserAdmin, userObject.isAdmin);
            subscriber.next(userObject);
            subscriber.complete();
          }
        });
      }).catch(error => {
        subscriber.throw(error);
        subscriber.complete();
      });
    });
  }

  logout(): void {
    LocalStorageService.clear();
    return this.af.auth.logout();
  }
}