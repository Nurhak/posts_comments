import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Routes from "routes/index.js";

// test utils file
const renderWithRouter = (ui, {route = "/"} = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, {wrapper: BrowserRouter});
};

// app.test.js
test("full app rendering/navigating", () => {
  renderWithRouter(<Routes />);
  expect(window.location.pathname).toEqual("/blog");
});

test("landing on a bad page", () => {
  renderWithRouter(<Routes />, {route: "/asd"});

  expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
});
