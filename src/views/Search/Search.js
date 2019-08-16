import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";

class Search extends Component {
  componentDidMount() {
    this.props.fetchSearchResults("test");
  }
  render() {
    const { error, searchResults, isFetching } = this.props;

    return (
      <Layout className="search-list">
        <h1>Search Results</h1>
        {error && <div data-ref={"error"}>{error.message}</div>}
        {isFetching ? (
          <div data-ref={"fetching"}>Fetching results...</div>
        ) : (
          <>
            {searchResults.map((result, index) => (
              <div key={index} data-ref={"search-result"}>
                {JSON.stringify(result)}
              </div>
            ))}
          </>
        )}
      </Layout>
    );
  }
}

Search.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  fetchSearchResults: PropTypes.func,
  searchResults: PropTypes.array
};

Search.defaultProps = {
  isFetching: false,
  error: {},
  fetchSearchResults: () => {},
  searchResults: []
};

export { Search };
export default Search;
