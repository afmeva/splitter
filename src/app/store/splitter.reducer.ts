import { ADD_ROW } from "./splitter.actions";
import { REMOVE_ROW } from "./splitter.actions";
import { MaxLengthValidator } from '@angular/forms';


export interface splitterStore {
  rows: Array<string[]>,
  maxRowLength:number;
  removedNumber:number;
}
const INITIAL_STATE:splitterStore = {
  rows: [],
  maxRowLength: 0,
  removedNumber: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ROW: {
      const newRow = action.payload.split(",");

      return {
        ...state,
        maxRowLength: Math.max(state.maxRowLength, newRow.length),
        rows: [...state.rows, newRow]
      };
    }
    case REMOVE_ROW: {
      const rows = [
        ...state.rows.slice(0, action.payload),
        ...state.rows.slice(action.payload + 1)
      ];

      const lengths = rows.map(row => row.length);

      return {
        ...state,
        rows,
        maxRowLength: Math.max(...lengths),
        removedNumber: state.removedNumber + 1
      };
    }
    default:
      return state;
  }
}
