import { Sensor } from './../shared/models/sensor.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../shared/reducers/';
import * as sensorActions from '../shared/actions/sensor.action';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'type'];
  dataSource = new MatTableDataSource<Sensor>([]);

  private sensors$;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new sensorActions.Load());

    this.sensors$ = this.store.select(fromRoot.getSensors).subscribe(sensors => {
      this.dataSource.data = sensors;
    });
  }

  ngOnDestroy() {
    this.sensors$.unsubscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
