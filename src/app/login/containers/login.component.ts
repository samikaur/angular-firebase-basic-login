import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-login-view></app-login-view>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
