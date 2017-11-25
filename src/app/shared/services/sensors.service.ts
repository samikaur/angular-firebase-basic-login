import { Sensor } from './../models/sensor.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const SENSORS: Sensor[] = [
  { id: '1', name: 'Temperature 1', type: 'temperature' },
  { id: '2', name: 'Temperature 2', type: 'temperature' },
  { id: '3', name: 'Temperature 3', type: 'temperature' },
  { id: '4', name: 'Temperature 4', type: 'temperature' },
  { id: '5', name: 'Temperature 5', type: 'temperature' },
  { id: '6', name: 'Temperature 6', type: 'temperature' },
  { id: '7', name: 'Temperature 7', type: 'temperature' },
  { id: '8', name: 'Temperature 8', type: 'temperature' },
  { id: '9', name: 'Temperature 9', type: 'temperature' },
  { id: '10', name: 'Temperature 10', type: 'temperature' },
  { id: '11', name: 'Temperature 11', type: 'temperature' },
];

@Injectable()
export class SensorsService {
  getSensors(): Observable<Sensor[]> {
    return Observable.of(SENSORS);
  }
}
