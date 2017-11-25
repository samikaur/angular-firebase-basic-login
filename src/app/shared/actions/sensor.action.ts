import { Action } from '@ngrx/store';
import { Sensor } from '../models/sensor.model';

export const LOAD = '[Sensor] Load';
export const LOAD_COMPLETE = '[Sensor] Load Complete';


export class Load implements Action {
  readonly type = LOAD;

  constructor() {}
}

export class LoadComplete implements Action {
  readonly type = LOAD_COMPLETE;

  constructor(public payload: Sensor[]) {}
}

export type Actions = Load | LoadComplete;
