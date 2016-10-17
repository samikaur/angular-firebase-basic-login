import { Injectable } from '@angular/core';
import {CanActivate, Router, CanActivateChild} from '@angular/router';

import {AuthService} from "./services/auth.service";

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService, private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
    }
    return this.authService.isAdmin();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
