import reducer from "../Common";
import * as types from "../../constants/ActionTypes";

describe("common reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      error: "",
      loading: false
    });
  });

  it("should handle FETCH_START", () => {
    expect(
      reducer([], {
        type: types.FETCH_START
      })
    ).toEqual({
      error: "",
      loading: true
    });
  });

  it("should handle FETCH_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.FETCH_SUCCESS
      })
    ).toEqual({
      error: "",
      loading: false
    });
  });

  it("should handle FETCH_ERROR", () => {
    expect(
      reducer([], {
        type: types.FETCH_ERROR,
        payload: "test"
      })
    ).toEqual({
      loading: false,
      error: "test"
    });
  });
});
