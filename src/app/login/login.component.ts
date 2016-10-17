import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(provider: string) {
    this.authService.login(provider).subscribe(() => {
      this.router.navigateByUrl('/sensors');
    }, (error) => {
      alert(error);
    });
  }
}