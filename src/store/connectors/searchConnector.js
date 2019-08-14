/* istanbul ignore file */
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSearchResults } from "../actions/searchActions";
import lodashGet from "lodash.get";

const mapStateToProps = state => ({
  searchResults: lodashGet(state, "search.results"),
  isFetching: lodashGet(state, "search.isFetchingData"),
  error: lodashGet(state, "search.error")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSearchResults
    },
    dispatch
  );

export const searchConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
