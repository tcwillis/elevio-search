import { compose } from "recompose";
import Search from "./Search";
import { searchConnector as withSearch } from "store/connectors/searchConnector";

export default compose(withSearch)(Search);
