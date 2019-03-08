import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent {
  text = "";

  @Output()
  value = new EventEmitter();

  onSubmit() {
    if (!this.text) {
      return;
    }

    this.value.next(this.text);
    this.text = "";
  }
}
