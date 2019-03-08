import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"]
})
export class RowComponent {
  @Input()
  elements: string[] = [];

  @Output()
  remove = new EventEmitter();

  onRemove() {
    this.remove.next();
  }
}
