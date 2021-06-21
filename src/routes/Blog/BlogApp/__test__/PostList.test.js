import {mount} from "enzyme";
import UserList from "../UserList";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import React from "react";
import PostList from "routes/Blog/BlogApp/PostList/index.js";
import User from "routes/Blog/BlogApp/UserList/User.js";
import Post from "routes/Blog/BlogApp/PostList/Post.js";

const mockedPosts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
];
describe("PostList", () => {
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
  it("render select user info if no user selected", () => {
    const wrapper = mount(
      <PostList posts={[]} selectedPost={{}} selectedUser={{}} />
    );
    expect(wrapper.find("div").text()).toEqual(
      expect.stringContaining("Please select user in order to list the posts.")
    );
  });
  it("render no posts info", () => {
    const wrapper = mount(
      <PostList posts={[]} selectedPost={{}} selectedUser={{name: "Nurhak"}} />
    );
    expect(wrapper.find("div").text()).toEqual(
      expect.stringContaining("Nurhak has no posts.")
    );
  });

  it("should render posts", () => {
    const wrapper = mount(
      <Provider store={store}>
        <PostList
          posts={mockedPosts}
          selectedPost={{}}
          selectedUser={{name: "Nurhak"}}
        />
      </Provider>
    );
    expect(wrapper.find("Post").length).toEqual(2);
  });
});

describe("Post", () => {
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
        <Post post={mockedPosts[0]} selectedPost={mockedPosts[0]} />
      </Provider>
    );
    expect(wrapper.find("#postTitle").hostNodes().text()).toEqual(
      expect.stringContaining(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      )
    );
  });
  it("renders active", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Post post={mockedPosts[0]} selectedPost={mockedPosts[0]} />
      </Provider>
    );
    expect(wrapper.find(".active").hostNodes().text()).toEqual(
      expect.stringContaining(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      )
    );
  });
  it("not renders active if not selected", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Post post={mockedPosts[0]} selectedPost={mockedPosts[1]} />
      </Provider>
    );
    expect(wrapper.find(".active").hostNodes().length).toEqual(0);
  });

  it("run dispatch on click", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Post post={mockedPosts[0]} selectedPost={mockedPosts[0]} />
      </Provider>
    );
    wrapper.find("#postCard").hostNodes().simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
