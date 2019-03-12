import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AddRow, RemoveRow } from "./store/splitter.actions";
import { Observable } from "rxjs";
import { splitterStore } from "./store/splitter.reducer";
import { getRows, getRemoved, getColumnNumber } from "./store/splitter.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public rows: Observable<Array<string[]>>;
  public removed: Observable<number>;
  public columnNumber: Observable<number>;

  constructor(private store: Store<splitterStore>) {}

  public ngOnInit():void {
    this.rows = this.store.select(getRows);
    this.removed = this.store.select(getRemoved);
    this.columnNumber = this.store.select(getColumnNumber);
  }

  public onText(text: string):void {
    this.store.dispatch(new AddRow(text));
  }

  public onRemove(index: number):void {
    this.store.dispatch(new RemoveRow(index));
  }
}
