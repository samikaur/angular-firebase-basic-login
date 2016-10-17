import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

interface SensorItem {
  $key: string,
  name: string,
  done: boolean,
  createdAt: number,
  updatedAt: number,
}

@Component({
  selector: 'app-sensor-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  private sensors: FirebaseListObservable<SensorItem[]>;

  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {
    this.sensors = this.af.database.list('/sensors/');
  }
}
