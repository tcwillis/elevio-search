import {
  SEARCH_RESULTS_REQUEST,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_FAILURE
} from "store/actionTypes";

const INITIAL_STATE = {
  results: [],
  error: null,
  isFetchingData: false
};

function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        isFetchingData: true
      };
    case SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isFetchingData: false
      };
    case SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.error
      };

    default:
      return state;
  }
}

export default search;
