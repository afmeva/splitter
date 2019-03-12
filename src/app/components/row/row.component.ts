import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"]
})
export class RowComponent {
  @Input()
  public elements: string[] = [];

  @Output()
  public remove:EventEmitter<void> = new EventEmitter();

  onRemove() {
    this.remove.next();
  }
}
