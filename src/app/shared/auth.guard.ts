import { Injectable } from '@angular/core';
import {CanActivate, Router, CanActivateChild} from '@angular/router';

import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService, private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    let auth = this.authService.isAuthenticated();

    auth.subscribe((allowed : boolean) => {
      if (!allowed) {
        this.router.navigate(['/login']);
      }
    });

    return auth;
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
