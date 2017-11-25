import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-users-list-view></app-users-list-view>
  `
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
