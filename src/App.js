import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import {Switch} from "react-router-dom";
import configureStore, {history} from "./redux/store";
import Routes from "./routes";
import AppWrapper from "./components/AppWrapper";

export const store = configureStore();
/**
 * Renders the main infrastructure.
 * Redux store and router history connected.
 * AppWrapper handles the main layout.
 * Routes handles route functionality.
 * @returns {JSX.Element}
 */
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper>
        <Switch>
          <Routes />
        </Switch>
      </AppWrapper>
    </ConnectedRouter>
  </Provider>
);

export default App;
