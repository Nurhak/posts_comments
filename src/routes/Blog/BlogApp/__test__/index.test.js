import React from "react";
import {mount} from "enzyme";
import BlogApp from "routes/Blog/BlogApp/index.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

describe("BlogApp", () => {
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
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    wrapper = mount(
      <Provider store={store}>
        <BlogApp />
      </Provider>
    );
  });

  it("should render startup components", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(wrapper.find("h3").length).toEqual(3);
  });

  it("should render children components", () => {
    expect(wrapper.find("UserList").length).toEqual(1);
    expect(wrapper.find("PostList").length).toEqual(1);
    expect(wrapper.find("PostDetail").length).toEqual(1);
  });
});
