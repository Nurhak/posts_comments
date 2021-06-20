import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";

const Post = ({post, selectedPost}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {post.title}
      </Grid>
      <Grid item xs={12}>
        {post.body}
      </Grid>
    </Grid>
  );
};

export default Post;

Post.prototype = {
  post: PropTypes.object.isRequired
};
