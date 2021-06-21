import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {useLocation} from "react-router-dom";
import Error404 from "./StatusPages/404";
import Blog from "./Blog";

/**
 * Handle the route request. Redirects root to blog.
 * If route not found redirect to 404 page.
 * @returns {JSX.Element}
 */
const Routes = () => {
  const location = useLocation();

  if (location.pathname === "" || location.pathname === "/") {
    return <Redirect to={"/blog"} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
