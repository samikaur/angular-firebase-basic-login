import { User } from './../../admin/models/user.model';
import { SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private sessionStorageService: SessionStorageService, private router: Router) {}

  canActivate(): boolean {
    const user = this.sessionStorageService.retrieve('user') as User;

    const admin = user && user.admin;

    if (!admin) {
      this.router.navigate(['sensors']);
    }

    return admin;
  }
}
