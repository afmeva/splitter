import { ADD_ROW, AddRow, RemoveRow, splitterActions } from "./splitter.actions";
import { REMOVE_ROW } from "./splitter.actions";
import { initServicesIfNeeded } from '@angular/core/src/view';

export interface splitterStore {
  rows: Array<string[]>,
  maxRowLength:number;
  removedNumber:number;
}
export const INITIAL_STATE:splitterStore = {
  rows: [],
  maxRowLength: 0,
  removedNumber: 0
};

export default function reducer(state = INITIAL_STATE, action:splitterActions):splitterStore {
  switch (action.type) {
    case ADD_ROW: {
      const newRow = (<AddRow>action).payload.split(",");

      return {
        ...state,
        maxRowLength: Math.max(state.maxRowLength, newRow.length),
        rows: [...state.rows, newRow]
      };
    }
    case REMOVE_ROW: {
      const rows = [
        ...state.rows.slice(0, (<RemoveRow>action).payload),
        ...state.rows.slice((<RemoveRow>action).payload + 1)
      ];

      const lengths = rows.map(row => row.length);
      const maxRowLength =  Math.max(...lengths);
      return {
        ...state,
        rows,
        maxRowLength: maxRowLength === -Infinity ? 0 : maxRowLength,
        removedNumber: state.removedNumber + 1
      };
    }
    default:
      return state;
  }
}
