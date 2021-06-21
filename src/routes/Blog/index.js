import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router";
import PageLoader from "../../components/PageLoader";

/**
 * Handles the blog application routes.
 * Route root request to BlogApp
 * @param match requested url
 * @returns {JSX.Element}
 */
const Blog = ({match}) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={`${requestedUrl}/`}
          component={lazy(() => import("./BlogApp"))}
        />
        <Route component={lazy(() => import("../StatusPages/404"))} />
      </Switch>
    </Suspense>
  );
};

export default Blog;
