import {
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_REQUEST,
  SEARCH_RESULTS_FAILURE
} from "../actionTypes";

const fetchSearchResultsSuccess = results => ({
  type: SEARCH_RESULTS_SUCCESS,
  results
});

function fetchSearchResultsRequest() {
  return {
    type: SEARCH_RESULTS_REQUEST
  };
}

function fetchSearchResultsFailure(error) {
  return {
    type: SEARCH_RESULTS_FAILURE,
    error
  };
}

export function fetchSearchResults() {
  return dispatch => {
    dispatch(fetchSearchResultsRequest());

    /* To Do - return fetch  and dispatch success or failure */
  };
}
