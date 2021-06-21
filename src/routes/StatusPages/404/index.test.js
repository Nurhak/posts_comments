import Error404 from "routes/StatusPages/404/index.js";
import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {mount, render} from "enzyme";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

configure({adapter: new Adapter()});

const history = createMemoryHistory();
history.push("/");

it("renders 404 component without crashing", () => {
  const wrapper = render(<Error404 />);
  const text = wrapper.find("div div ");
  expect(text.text()).toEqual(expect.stringContaining("Page not found"));
});

it("Test click event", () => {
  const historyMock = {push: jest.fn(), location: {}, listen: jest.fn()};
  const wrapper = mount(
    <Router history={historyMock}>
      <Error404 />
    </Router>
  );
  wrapper.find("button").simulate("click");
  expect(historyMock.push).toHaveBeenLastCalledWith("/");
});
