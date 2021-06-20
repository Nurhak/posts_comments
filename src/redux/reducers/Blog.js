import {SET_POSTS, SET_USERS, SET_CURRENT_USER} from "../constants/ActionTypes";

const INIT_STATE = {
  users: [],
  posts: [],
  selectedPost: {},
  selectedUser: {}
};

// eslint-disable-next-line
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.payload
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
