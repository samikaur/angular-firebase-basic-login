import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../../shared/reducers/index';

import * as fromUser from './user.reducer';
import * as fromRoot from '../../shared/reducers';

export interface AdminState {
  users: fromUser.State;
}

export interface State extends fromRoot.AppState {
  'admin': AdminState;
}

export const reducers = {
  users: fromUser.userReducer
};

export const getAdminState = createFeatureSelector<AdminState>('admin');

export const getUsersState = createSelector(
  getAdminState,
  state => state.users
);

export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = fromUser.adapter.getSelectors(getUsersState);
