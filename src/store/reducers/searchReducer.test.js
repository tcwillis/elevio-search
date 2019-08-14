import reducer from "./searchReducer";
import {
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_REQUEST,
  SEARCH_RESULTS_FAILURE
} from "../actionTypes";

describe("Search reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      results: [],
      error: null,
      isFetchingData: false
    });
  });

  it("should handle SEARCH_RESULTS_SUCCESS", () => {
    const mockResponse = [{ id: 123, title: "An article" }];

    expect(
      reducer(undefined, {
        type: SEARCH_RESULTS_SUCCESS,
        payload: mockResponse
      })
    ).toEqual({
      results: mockResponse,
      error: null,
      isFetchingData: false
    });
  });

  it("should handle SEARCH_RESULTS_REQUEST", () => {
    expect(
      reducer(undefined, {
        type: SEARCH_RESULTS_REQUEST
      })
    ).toEqual({
      results: [],
      error: null,
      isFetchingData: true
    });
  });

  it("should handle SEARCH_RESULTS_FAILURE", () => {
    const error = { code: 403, message: "Forbidden request" };
    expect(
      reducer(undefined, {
        type: SEARCH_RESULTS_FAILURE,
        error
      })
    ).toEqual({
      results: [],
      error,
      isFetchingData: false
    });
  });
});
