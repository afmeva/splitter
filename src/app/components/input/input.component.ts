import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent {
  public text: string = "";

  @Output()
  public value: EventEmitter<string> = new EventEmitter();

  public onSubmit(): void {
    if (!this.text) {
      return;
    }

    this.value.next(this.text);
    this.text = "";
  }
}
