import {
  TestBed,
  ComponentFixture,
} from "@angular/core/testing";
import { InputComponent } from "./input.component";
import { Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

describe("Input:", () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: InputComponent;
  let host: HostComponent;

  @Component({
    selector: "app-host",
    template: `
      <app-input #component (value)="onValue($event)"></app-input>
    `
  })
  class HostComponent {
    @ViewChild("component") public component;

    onValue() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule],
      declarations: [HostComponent, InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    component = host.component;
  });

  it("should be created", () => {
    expect(component).toBeDefined();
  });

  it("should call onValue method", () => {
    const text = "aa,bb,cc";
    component.text = text;

    spyOn(host, "onValue");
    component.onSubmit();

    expect(host.onValue).toHaveBeenCalledWith(text);
    expect(component.text).toEqual("");
  });

  it("should call onSubmit when addRow button is clicked", () => {
    const addRowButton:HTMLButtonElement = fixture.nativeElement.querySelector("button");

    spyOn(component, "onSubmit");
    addRowButton.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
