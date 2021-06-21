import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/actions/Blog";
import UserList from "./UserList/index.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import {Grid} from "@material-ui/core";
import PostList from "./PostList";
import PostDetail from "routes/Blog/BlogApp/PostDetail/index.js";

const useStyles = makeStyles(() => ({
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
  const {users, selectedUser, posts, selectedPost, comments} = useSelector(
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
        <h3>Users</h3>
        <UserList users={users} selectedUser={selectedUser} />
      </Grid>
      <Grid item className={classes.paper} xs={3}>
        <h3>Posts</h3>
        <PostList
          posts={posts}
          selectedPost={selectedPost}
          selectedUser={selectedUser}
        />
      </Grid>
      <Grid item className={classes.paper} xs={6}>
        <h3>Post Detail</h3>
        <PostDetail post={selectedPost} comments={comments} />
      </Grid>
    </Grid>
  );
};
export default BlogApp;
