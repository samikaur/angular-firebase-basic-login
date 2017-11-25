import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../../shared/reducers/index';

import * as fromUser from './user.reducer';
import * as fromRoot from '../../shared/reducers';

export interface UsersState {
  users: fromUser.State;
}

export interface State extends fromRoot.AppState {
  'admin': UsersState;
}

export const reducers = {
  users: fromUser.userReducer
};

export const getUsersState = createFeatureSelector<UsersState>('admin');

export const getUserEntitiesState = createSelector(
  getUsersState,
  state => state.users
);

export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = fromUser.adapter.getSelectors(getUserEntitiesState);
