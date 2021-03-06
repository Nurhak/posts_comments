import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
  error: "",
  loading: false
};

// eslint-disable-next-line
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: "", loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: "", loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default:
      return state;
  }
};
