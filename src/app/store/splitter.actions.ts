import { Action } from '@ngrx/store';

export const ADD_ROW = "ADD_ROW";
export const REMOVE_ROW = "REMOVE_ROW";

export class AddRow implements Action {
  type = ADD_ROW
  constructor(public payload: string) {}
}

export class RemoveRow implements Action {
  type = REMOVE_ROW
  constructor(public payload: number) {}
}

export type splitterActions = AddRow | RemoveRow;
