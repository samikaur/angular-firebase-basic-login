import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router, public af: AngularFire) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
