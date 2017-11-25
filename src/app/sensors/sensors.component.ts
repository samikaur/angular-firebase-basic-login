import { Sensor } from './../shared/models/sensor.model';
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromRoot from '../shared/reducers/';
import * as sensorActions from '../shared/actions/sensor.action';

@Component({
  selector: 'app-sensors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'type'];
  dataSource = new MatTableDataSource<Sensor>([]);

  @ViewChild(MatSort) sort: MatSort;

  private sensors$;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new sensorActions.Load());

    this.sensors$ = this.store.select(fromRoot.getSensors).subscribe(sensors => {
      this.dataSource.data = sensors;
    });

    this.dataSource.sort = this.sort;
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
