import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {LocalStorageService} from "./localstorage.service";

export const UserUid = 'user.uid';
export const UserAdmin = 'user.isAdmin';
export const UserName = 'user.name';

export interface INewUser {
  name: string;
  email: string;
  isAdmin : boolean;
}

export interface IUser extends INewUser {
  $key: string;
  $exists(): boolean;
}

@Injectable()
export class UserService {
  constructor(
    private af: AngularFire
  ) { }

  getUser(uid: string): FirebaseObjectObservable<IUser> {
    if (!uid) {
      uid = LocalStorageService.getStringItem(UserUid);
    }

    return this.af.database.object('/users/' + uid);
  }

  addUser(authUser: FirebaseAuthState): firebase.Promise<void> {
    let newUser: INewUser =  {
      name: authUser.auth.displayName,
      email: authUser.auth.email,
      isAdmin: false
    };

    return this.af.database.object('/users/' + authUser.uid).set(newUser);
  }

  getUsers(): FirebaseListObservable<IUser[]> {
    return this.af.database.list('/users/');
  }
}