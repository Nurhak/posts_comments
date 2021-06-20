import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import {Switch} from "react-router-dom";
import configureStore, {history} from "./redux/store";
import Routes from "./routes";
import AppWrapper from "./components/AppWrapper";

export const store = configureStore();

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
