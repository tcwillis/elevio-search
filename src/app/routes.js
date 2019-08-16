import Home from "views/Home";
import NotFound from "views/NotFound";
import Search from "views/Search";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/search",
    exact: true,
    component: Search
  },
  {
    path: "*",
    exact: true,
    component: NotFound
  }
];
