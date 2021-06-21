import reducer from "../Blog";
import * as types from "../../constants/ActionTypes";

const mockedPosts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "test1"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "test2"
  }
];

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
describe("blog reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      users: [],
      posts: [],
      selectedPost: {},
      selectedUser: {},
      comments: []
    });
  });

  it("should handle SET_POSTS", () => {
    expect(
      reducer([], {
        type: types.SET_POSTS,
        payload: mockedPosts
      })
    ).toEqual({
      posts: mockedPosts
    });
  });

  it("should handle SET_USERS", () => {
    expect(
      reducer([], {
        type: types.SET_USERS,
        payload: mockedUsers
      })
    ).toEqual({
      users: mockedUsers
    });
  });

  it("should handle SET_CURRENT_USER", () => {
    expect(
      reducer([], {
        type: types.SET_CURRENT_USER,
        payload: mockedUsers[0]
      })
    ).toEqual({
      selectedUser: mockedUsers[0]
    });
  });

  it("should handle SET_CURRENT_POST", () => {
    expect(
      reducer([], {
        type: types.SET_CURRENT_POST,
        payload: mockedPosts[0]
      })
    ).toEqual({
      selectedPost: mockedPosts[0]
    });
  });

  it("should handle SET_COMMENTS", () => {
    expect(
      reducer([], {
        type: types.SET_COMMENTS,
        payload: mockedComments
      })
    ).toEqual({
      comments: mockedComments
    });
  });
});
