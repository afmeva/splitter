import { createFeatureSelector, createSelector } from "@ngrx/store";
import { splitterStore } from './splitter.reducer';


const selectSplitter = createFeatureSelector<splitterStore>("splitter");

const padding = (length:number) => (row: string[]) => {
  const lengthDiff = length - row.length;

  return [...row, ...new Array(lengthDiff)]
}

export const getRows = createSelector(
  selectSplitter,
  state => state.rows.map(padding(state.maxRowLength))
);

export const getRemoved = createSelector(
  selectSplitter,
  ({removedNumber}) => removedNumber
);

export const getColumnNumber = createSelector(
  selectSplitter,
  ({maxRowLength}) => maxRowLength
);
