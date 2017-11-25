import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.css']
})
export class UsersListViewComponent {
  displayedColumns = ['name', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  { id: '1', name: 'Simon Sample', email: 'simon.sample@notreal.com' },
  { id: '2', name: 'Admin', email: '' },
];
