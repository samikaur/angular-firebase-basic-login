import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import {IUser, UserService} from "../../../shared/services/user.service";


@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListUsersComponent implements OnInit {
  public users: FirebaseListObservable<IUser[]>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  editUser(user: IUser) {
    this.router.navigate(['admin/user', user.$key]);
  }
}
