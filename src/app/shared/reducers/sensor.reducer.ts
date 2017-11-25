import { Sensor } from './../models/sensor.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as sensorAction from '../actions/sensor.action';

export interface State extends EntityState<Sensor> { }

const adapter = createEntityAdapter<Sensor>({
  selectId: (sensor: Sensor) => sensor.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState();

export function sensorReducer(
  state: State = initialState,
  action: sensorAction.Actions,
): State {
  switch (action.type) {
    case sensorAction.LOAD_COMPLETE:
      return adapter.addAll(action.payload, state);
    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
