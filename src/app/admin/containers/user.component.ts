import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-user-view></app-user-view>
  `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
