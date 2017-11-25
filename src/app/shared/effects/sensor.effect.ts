import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as sensorAction from '../actions/sensor.action';
import { Sensor } from '../models/sensor.model';
import { SensorsService } from '../services/sensors.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SensorEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(sensorAction.LOAD)
    .switchMap(() => {
      return this.sensorService.getSensors()
        .map((sensors: Sensor[]) => new sensorAction.LoadComplete(sensors));
    });

  constructor(
    private actions$: Actions,
    private sensorService: SensorsService
  ) {}
}
