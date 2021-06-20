import {fetchError, fetchStart, fetchSuccess} from "./Common";
import {SET_CURRENT_USER, SET_POSTS, SET_USERS} from "../constants/ActionTypes";
import axios from "../../services/config";

export const getPosts = userId => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get(`/posts?userId=${userId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchSuccess());
          dispatch({type: SET_POSTS, payload: response.data});
        } else {
          dispatch(fetchError("Something went wrong"));
        }
      })
      .catch(error => {
        dispatch(fetchError("Something went wrong"));
      });
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get("/users")
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchSuccess());
          dispatch({type: SET_USERS, payload: response.data});
        } else {
          dispatch(fetchError("Something went wrong"));
        }
      })
      .catch(error => {
        dispatch(fetchError("Something went wrong"));
      });
  };
};

export const setUser = user => {
  return dispatch => {
    dispatch({type: SET_CURRENT_USER, payload: user});
  };
};
