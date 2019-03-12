import { Component, Host, ViewChild } from "@angular/core";
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { StatisticsComponent } from './statistics.component';

describe("Statistics:", () => {
  @Component({
    selector: "app-host",
    template: `
      <app-statistics #component
        [removed]="removed"
        [elements]="elements"
        [columnNumber]="columnNumber"
      ></app-statistics>
    `
  })
  class HostComponent {
    @ViewChild("component") public component;

    public removed:number = 1;
    public elements:number = 4;
    public columnNumber:number = 5;
  }

  let component: StatisticsComponent;
  let host: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, StatisticsComponent]
    });

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    component = host.component;

    fixture.detectChanges();
  }));

  it("should be created", () => {
    expect(component).toBeDefined();
  });

  it("should render removed elements", () => {
    const content = fixture.nativeElement.querySelector(".removed").textContent;

    expect(content).toEqual(host.removed.toString());
  });

  it("should render columnNumber", () => {
    const content = fixture.nativeElement.querySelector(".columnNumber").textContent;

    expect(content).toEqual(host.columnNumber.toString());
  });

  it("should render elements", () => {
    const content = fixture.nativeElement.querySelector(".elements").textContent;

    expect(content).toEqual(host.elements.toString());
  });
});
