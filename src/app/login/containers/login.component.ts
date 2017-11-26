import { Router } from '@angular/router';
import { User } from './../../admin/models/user.model';
import { LoginInformation } from './../models/login-information';
import { LoginProvider } from './../enums/login-provider';
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { SessionStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-login-view (login)="onLogin($event)"></app-login-view>
  `
})
export class LoginComponent implements OnInit, OnDestroy {
  private userInfo$: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private ngZone: NgZone,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.afAuth.auth.signOut();
  }

  ngOnDestroy() {
    if (this.userInfo$) {
      this.userInfo$.unsubscribe();
    }
  }

  onLogin(loginInformation: LoginInformation) {
    let promise: Promise<any> = null;

    switch (loginInformation.loginProvider) {
      case LoginProvider.Email:
        promise = this.afAuth.auth.signInWithEmailAndPassword(loginInformation.email, loginInformation.password);
        break;
      case LoginProvider.Google:
        promise = this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        break;
      case LoginProvider.Github:
        promise = this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
        break;
      case LoginProvider.Facebok:
        promise = this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        break;
    }

    promise.then((info) => {
      const user: User = {
        id: info.user.uid,
        email: info.user.email,
        name: info.user.displayName,
        admin: false
      };

      this.userInfo$ = this.afs.doc<User>('users/' + user.id).valueChanges().subscribe((userFromDb) => {
        user.admin = userFromDb.admin;

        this.sessionStorageService.store('user', user);

        // Firebase auth promise uses different zone so to update Angular view
        // we need to call route inside Angular zone.
        this.ngZone.run(() => {
          this.router.navigate(['sensors']);
        });
      });

    });
  }

}
