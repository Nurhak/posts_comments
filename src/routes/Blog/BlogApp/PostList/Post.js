import React from "react";
import PropTypes from "prop-types";
import {Card, CardContent} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {getComments, setPost} from "../../../../redux/actions/Blog.js";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "&:hover, &.active": {
      cursor: "pointer",
      backgroundColor: "#3f51b5",
      "& $title": {
        color: "#fff",
        fontSize: 15
      },
      "& .MuiTypography-body2": {
        color: "#fff"
      }
    },
    "& .MuiTypography-body2": {
      fontWeight: 500
    }
  },
  title: {
    fontSize: 14
  }
});

/**
 * Renders the custom post card.
 * @param post to be rendered.
 * @param selectedPost to be tagged as active.
 * @returns {JSX.Element}
 * @constructor
 */
const Post = ({post, selectedPost}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      id="postCard"
      className={clsx(classes.root, {
        active: post === selectedPost
      })}
      variant="outlined"
      onClick={() => {
        dispatch(setPost(post));
        dispatch(getComments(post.id));
      }}
    >
      <CardContent>
        <Typography
          id="postTitle"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;

Post.prototype = {
  post: PropTypes.object.isRequired,
  selectedPost: PropTypes.object.isRequired
};
