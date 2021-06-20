import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/actions/Blog";
import UserList from "./UserList/index.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import {Grid} from "@material-ui/core";
import PostList from "./PostList";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: 20,
    boxShadow: "1px 1px 2px #606050"
  }
}));

const BlogApp = () => {
  const dispatch = useDispatch();
  const {users, selectedUser, posts, selectedPost} = useSelector(
    ({blog}) => blog
  );
  const classes = useStyles();

  useEffect(
    () => {
      dispatch(getUsers());
    },
    [ dispatch ]
  );
  return (
    <Grid container spacing={4} className={classes.paper}>
      <Grid item xs={3} className={classes.paper}>
        <UserList users={users} selectedUser={selectedUser} />
      </Grid>
      <Grid item className={classes.paper} xs={3}>
        <PostList posts={posts} selectedPost={selectedPost} />
      </Grid>
      <Grid item className={classes.paper} xs={6} />
    </Grid>
  );
};
export default BlogApp;
