
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromSensor from './sensor.reducer';

export interface AppState {
  sensor: fromSensor.State;
}

export const reducers: ActionReducerMap<AppState> = {
  sensor: fromSensor.sensorReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
? [logger]
: [];

export const getSensorState = createFeatureSelector<fromSensor.State>('sensor');

export const getSensors = createSelector(
  getSensorState,
  fromSensor.selectAll
);
