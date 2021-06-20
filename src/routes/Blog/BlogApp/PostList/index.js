import React from "react";
import PropTypes from "prop-types";
import CmtList from "components/CmtList.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Post from "./Post";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflowX: "hidden"
  }
}));

const PostList = ({posts, selectedPost}) => {
  const classes = useStyles();
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
  posts: PropTypes.array.isRequired
};
