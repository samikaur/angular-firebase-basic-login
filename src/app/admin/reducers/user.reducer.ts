import { User } from './../models/user.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as userAction from '../actions/user.action';

export interface State extends EntityState<User> { }

export const adapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState();

export function userReducer(
  state: State = initialState,
  action: userAction.Actions,
): State {
  switch (action.type) {
    case userAction.LOAD_COMPLETE:
      return adapter.addAll(action.payload, state);
    default:
      return state;
  }
}
