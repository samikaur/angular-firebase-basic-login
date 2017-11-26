import { User } from './admin/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn = false;
  admin = false;

  constructor(private afAuth: AngularFireAuth, private router: Router, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.sessionStorageService.observe('user').subscribe((user: User) => {
      this.checkIfUserIsLoggedIn(user);
    });

    this.checkIfUserIsLoggedIn(this.sessionStorageService.retrieve('user'));
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.sessionStorageService.clear();
      this.router.navigate(['login']);
    });
  }

  private checkIfUserIsLoggedIn(user: User) {
    if (user) {
      this.loggedIn = true;
      this.admin = user.admin;
    } else {
      this.loggedIn = false;
      this.admin = false;
    }
  }
}
