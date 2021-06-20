import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import Common from "./Common";
import Blog from "./Blog";

// eslint-disable-next-line
export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    blog: Blog
  });
