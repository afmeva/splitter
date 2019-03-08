import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import splitterReducer from "./splitter.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature('splitter', splitterReducer),
  ]
})
export class SplitterStoreModule {}