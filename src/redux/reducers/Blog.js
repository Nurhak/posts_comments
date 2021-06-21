import {
  SET_POSTS,
  SET_USERS,
  SET_CURRENT_USER,
  SET_CURRENT_POST,
  SET_COMMENTS
} from "../constants/ActionTypes";

const INIT_STATE = {
  users: [],
  posts: [],
  selectedPost: {},
  selectedUser: {},
  comments: []
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
    case SET_CURRENT_POST: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }
    case SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload
      };
    }
    default:
      return state;
  }
};
