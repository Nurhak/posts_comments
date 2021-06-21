import {mount} from "enzyme";
import React from "react";
import PostDetail from "routes/Blog/BlogApp/PostDetail/index.js";

const mockPost = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};
const mockedComments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }
];
describe("PostDetail", () => {
  it("do not render id post is not selected", () => {
    const wrapper = mount(<PostDetail post={{}} comments={[]} />);
    expect(wrapper.find(".makeStyles-seperator-22").length).toEqual(0);
  });
  it("render if post provided", () => {
    const wrapper = mount(<PostDetail post={mockPost} comments={[]} />);
    expect(wrapper.find("h1").text()).toEqual(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });

  it("render comments if exist", () => {
    const wrapper = mount(
      <PostDetail post={mockPost} comments={mockedComments} />
    );
    expect(wrapper.find("#commentCard").hostNodes().length).toEqual(3);
  });
});
