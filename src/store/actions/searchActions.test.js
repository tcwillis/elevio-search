import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchSearchResults } from "./searchActions";
import { SEARCH_RESULTS_REQUEST } from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Search actions", () => {
  it("creates SEARCH_RESULTS_SUCCESS when results have been fetched", () => {
    const expectedActions = [{ type: SEARCH_RESULTS_REQUEST }];
    const store = mockStore({ search: { results: [], isFetchingData: false } });

    store.dispatch(fetchSearchResults());
    expect(store.getActions()).toEqual(expectedActions);

    /* To Do test for dispatched action after results are fetched */
  });
});
