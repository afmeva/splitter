import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { InputComponent } from "./components/input/input.component";
import { RowComponent } from "./components/row/row.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { FormsModule } from "@angular/forms";
import { splitterStore } from "./store/splitter.reducer";
import { By } from "@angular/platform-browser";
import { AddRow, RemoveRow } from "./store/splitter.actions";
import { Store, StoreModule } from "@ngrx/store";
import { SplitterStoreModule } from "./store/spliter-store.module";

describe("AppComponent", () => {
  function getChildComponent(component) {
    return fixture.debugElement.query(By.directive(component))
      .componentInstance;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, StoreModule.forRoot({}), SplitterStoreModule],
      declarations: [
        AppComponent,
        InputComponent,
        RowComponent,
        StatisticsComponent
      ],
      providers: [Store]
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let store: Store<splitterStore>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    app = fixture.debugElement.componentInstance;

    spyOn(store, "dispatch").and.callThrough();
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it("should pass down the rows added to RowComponent", () => {
    const mockRows: string[] = ["aa,bb", "rrr,bb,aa"];
    const mockRowsPadded: string[][] = [
      ["aa", "bb", ""],
      ["rrr", "bb", "aa"]
    ];
    mockRows.forEach(rowData => store.dispatch(new AddRow(rowData)));

    fixture.detectChanges();

    const rowComponents: RowComponent[] = fixture.debugElement
      .queryAll(By.directive(RowComponent))
      .map(({ componentInstance }) => componentInstance);


    expect(rowComponents.length).toEqual(mockRows.length);

    rowComponents.forEach((row, index) => {
      expect(row.elements).toEqual(mockRowsPadded[index]);
    });
  });

  it("should dispatch AddRow action when a value is emitted", () => {
    const inputComponent: InputComponent = getChildComponent(InputComponent);

    const mockText = "aa,bb,cc";

    inputComponent.value.emit(mockText);
    expect(store.dispatch).toHaveBeenCalledWith(new AddRow(mockText));
  });

  it("should dispatch RemoveRow action when remove is emitted", () => {
    store.dispatch(new AddRow("aa,bb"));

    fixture.detectChanges();

    const rowComponent: RowComponent = getChildComponent(RowComponent);

    rowComponent.remove.emit();

    expect(store.dispatch).toHaveBeenCalledWith(new RemoveRow(0));
  });

  it("should pass down properties for statistics", () => {
    store.dispatch(new AddRow("aa,bb,cc"));
    store.dispatch(new AddRow("ff,gg,rr"));
    store.dispatch(new AddRow("aa"));
    store.dispatch(new RemoveRow(1));

    fixture.detectChanges();

    const statsComponent: StatisticsComponent = getChildComponent(StatisticsComponent);
    expect(statsComponent.columnNumber).toEqual(3);
    expect(statsComponent.elements).toEqual(2);
    expect(statsComponent.removed).toEqual(1);
  });
});
