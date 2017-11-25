import { User } from './../models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.css']
})
export class UsersListViewComponent {
  displayedColumns = ['name', 'email'];
  dataSource = new MatTableDataSource([]);

  @Input()
  set users(users: User[]) {
    this.dataSource.data = users;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
