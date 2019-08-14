import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import search from "./reducers/searchReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search
  });
