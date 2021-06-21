import {mount} from "enzyme";
import UserList from "../UserList";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import React from "react";
import User from "routes/Blog/BlogApp/UserList/User.js";

const mockedUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];
describe("UserList", () => {
  const initialState = {
    blog: {
      users: [],
      posts: [],
      selectedPost: {},
      selectedUser: {},
      comments: []
    }
  };
  const middlewares = [ thunk ]; // add your middlewares like `redux-thunk`
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
  });
  it("render no users to list if no user", () => {
    const wrapper = mount(<UserList users={[]} selectedUser={[]} />);
    expect(wrapper.find("div").text()).toEqual(
      expect.stringContaining("There is no user.")
    );
  });

  it("should render users", () => {
    const wrapper = mount(
      <Provider store={store}>
        <UserList users={mockedUsers} selectedUser={mockedUsers[0]} />
      </Provider>
    );
    expect(wrapper.find("User").length).toEqual(2);
  });
});

describe("User", () => {
  const initialState = {
    blog: {
      users: [],
      posts: [],
      selectedPost: {},
      selectedUser: {},
      comments: []
    }
  };
  const middlewares = [ thunk ]; // add your middlewares like `redux-thunk`
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
  });
  it("renders correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <User user={mockedUsers[0]} selectedUser={mockedUsers[0]} />{" "}
      </Provider>
    );
    expect(wrapper.find("#userName").hostNodes().text()).toEqual(
      expect.stringContaining("Leanne Graham")
    );
  });
  it("renders active", () => {
    const wrapper = mount(
      <Provider store={store}>
        <User user={mockedUsers[0]} selectedUser={mockedUsers[0]} />{" "}
      </Provider>
    );
    expect(wrapper.find(".active").hostNodes().text()).toEqual(
      expect.stringContaining("Leanne Graham")
    );
  });
  it("not render active if not selected", () => {
    const wrapper = mount(
      <Provider store={store}>
        <User user={mockedUsers[0]} selectedUser={mockedUsers[1]} />
      </Provider>
    );
    expect(wrapper.find(".active").hostNodes().length).toEqual(0);
  });

  it("run dispatch on click", () => {
    const wrapper = mount(
      <Provider store={store}>
        <User user={mockedUsers[0]} selectedUser={{}} />
      </Provider>
    );
    wrapper.find("#userCard").hostNodes().simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
