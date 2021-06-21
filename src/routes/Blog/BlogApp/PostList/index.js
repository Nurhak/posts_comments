import React from "react";
import PropTypes from "prop-types";
import CmtList from "components/CmtList.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Post from "./Post";
import Box from "@material-ui/core/Box";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 65px)",
    overflowX: "hidden"
  },
  message: {
    textAlign: "center",
    marginTop: "50%",
    fontWeight: "bold"
  }
}));

const PostList = ({posts, selectedPost, selectedUser}) => {
  const classes = useStyles();
  if (!selectedUser.name) {
    return (
      <Box className={clsx(classes.root, classes.message)}>
        Please select user in order to list the posts.
      </Box>
    );
  }
  if (!posts.length) {
    return (
      <Box className={clsx(classes.root, classes.message)}>
        {selectedUser.name} has no posts.
      </Box>
    );
  }
  return (
    <CmtList
      data={posts}
      className={classes.root}
      renderRow={data => {
        return <Post key={data.id} post={data} selectedPost={selectedPost} />;
      }}
    />
  );
};

export default PostList;

PostList.prototype = {
  posts: PropTypes.array.isRequired,
  selectedPost: PropTypes.object.isRequired
};
