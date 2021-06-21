import {render, screen} from "@testing-library/react";
import App from "./App";

it("renders app component without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/posts and comments/i);
  expect(linkElement).toBeInTheDocument();
});

it("check if the browser redirected to blog", () => {
  render(<App />);
  expect(window.location.pathname).toEqual("/blog");
});
