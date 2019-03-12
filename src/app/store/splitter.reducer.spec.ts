import reducer, { INITIAL_STATE } from "./splitter.reducer";
import { AddRow, RemoveRow, splitterActions } from "./splitter.actions";

describe("reducer:", () => {
  it("should return the initial state", () => {
    const state = reducer(undefined, {} as splitterActions);

    expect(state).toEqual(INITIAL_STATE);
  });

  it("should handle AddRow action", () => {
    const action = new AddRow("aa,bb");
    const state = reducer(undefined, action);

    expect(state).toEqual({
      rows: [["aa", "bb"]],
      maxRowLength: 2,
      removedNumber: 0
    });
  });

  it("should handle RemoveRow action", () => {
    const action = new RemoveRow(0);
    const state = reducer(
      {
        rows: [["aa", "bb"]],
        maxRowLength: 2,
        removedNumber: 0
      },
      action
    );

    expect(state).toEqual({
      rows: [],
      maxRowLength: 0,
      removedNumber: 1
    });
  });

  it("should handle unknown action", () => {
    const action = {
      type: "FAKE_TYPE"
    } as splitterActions;

    const dummyState = {
      rows: [["aa", "bb"]],
      maxRowLength: 2,
      removedNumber: 0
    };

    const state = reducer(dummyState, action);
    expect(state).toEqual(dummyState);
  });
});
