import { RowComponent } from "./row.component";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";

describe("row:", () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;
  let component: RowComponent;

  @Component({
    selector: "app-host",
    template: `
      <app-row #component [elements]="elements" (remove)="onRemove()"></app-row>
    `
  })
  class HostComponent {
    @ViewChild("component") public component;

    public elements: string[] = ["aa", "bb"];

    onRemove() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, RowComponent]
    });

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    component = host.component;

    fixture.detectChanges();
  }));

  it("shoud be created", () => {
    expect(component).toBeDefined();
  });

  it("should render the elements set", () => {
    const elements: HTMLDivElement[] = Array.from(fixture.nativeElement.querySelectorAll(".row__element"));
    const content: string[] = elements.map(({textContent = ""}) => textContent.trim());

    expect(elements.length).toEqual(component.elements.length);
    expect(content).toEqual(component.elements);
  });

  it("should call onRemove method from host when remove button is clicked", () => {
    spyOn(host, "onRemove");
    const removeButton: HTMLButtonElement = fixture.nativeElement.querySelector("button");
    removeButton.click();

    expect(host.onRemove).toHaveBeenCalled();
  });
});
