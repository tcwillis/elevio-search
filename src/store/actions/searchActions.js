import {
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_REQUEST,
  SEARCH_RESULTS_FAILURE
} from "../actionTypes";

import { makeRequest } from "utils/request";
import Config from "app/config";

const fetchSearchResultsSuccess = results => ({
  type: SEARCH_RESULTS_SUCCESS,
  payload: results
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

export function fetchSearchResults(searchTerm) {
  return dispatch => {
    dispatch(fetchSearchResultsRequest());
    const url = `${Config.apiBaseUrl}/search/en?query=${searchTerm}`;
    return makeRequest(url)
      .then(result => dispatch(fetchSearchResultsSuccess(result)))
      .catch(error => dispatch(fetchSearchResultsFailure(error)));
  };
}
