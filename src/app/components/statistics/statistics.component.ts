import { Component, Input } from "@angular/core";


@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"]
})
export class StatisticsComponent {
  @Input() public removed: number;
  @Input() public columnNumber: number;
  @Input() public elements: number;
}
