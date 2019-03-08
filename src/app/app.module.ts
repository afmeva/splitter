import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { InputComponent } from "./components/input/input.component";
import { RowComponent } from "./components/row/row.component";
import { SplitterStoreModule } from "./store/spliter-store.module";
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [AppComponent, InputComponent, RowComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    SplitterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
