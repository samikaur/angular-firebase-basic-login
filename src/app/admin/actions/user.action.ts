import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOAD = '[User] Load';
export const LOAD_COMPLETE = '[User] Load Complete';


export class Load implements Action {
  readonly type = LOAD;

  constructor() {}
}

export class LoadComplete implements Action {
  readonly type = LOAD_COMPLETE;

  constructor(public payload: User[]) {}
}

export type Actions = Load | LoadComplete;
