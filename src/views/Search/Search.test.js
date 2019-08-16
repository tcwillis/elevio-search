import React from "react";
import { Search } from "./Search";
import { shallow } from "enzyme";

describe("<Search />", () => {
  it("should render without props", () => {
    shallow(<Search />);
  });

  it("should display a title", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find("h1").text()).toEqual("Search Results");
  });

  it("should display a fetching message", () => {
    const wrapper = shallow(<Search isFetching={true} />);
    expect(wrapper.find("[data-ref='fetching']").length).toEqual(1);
  });

  it("should display an error message", () => {
    const wrapper = shallow(
      <Search error={{ message: "Failed to fetch results" }} />
    );
    expect(wrapper.find("[data-ref='error']").length).toEqual(1);
  });

  it("should display a list of results", () => {
    const results = [{ id: 1 }, { id: 2 }];
    const wrapper = shallow(<Search searchResults={results} />);
    expect(wrapper.find("[data-ref='search-result']").length).toEqual(2);
  });
});
