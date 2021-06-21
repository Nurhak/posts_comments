import React from "react";
import {Divider, Grid} from "@material-ui/core";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  seperator: {
    marginLeft: 0,
    width: "100%",
    paddingBottom: 2,
    marginBottom: 10,
    marginTop: 10
  },
  email: {
    fontWeight: 300,
    fontStyle: "italic",
    fontSize: "0.875rem"
  },
  name: {
    textTransform: "capitalize",
    fontWeight: 600
  }
}));

const PostDetail = ({post, comments}) => {
  const classes = useStyles();
  if (post.title) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h1>{post.title}</h1>
        </Grid>
        <Grid item xs={12}>
          <p>{post.body}</p>
        </Grid>
        <Divider
          variant="inset"
          component="div"
          className={classes.seperator}
        />
        {comments.map(comment => (
          <React.Fragment key={comment.id}>
            <Grid item xs={12} id="commentCard">
              <Box>
                <span className={classes.name}>{comment.name}</span> |{" "}
                <span className={classes.email}>{comment.email}</span>
              </Box>
              <Box>{comment.body}</Box>
            </Grid>
            <Divider
              variant="inset"
              component="div"
              className={classes.seperator}
            />
          </React.Fragment>
        ))}
      </Grid>
    );
  } else {
    return <React.Fragment />;
  }
};

export default PostDetail;

PostDetail.prototype = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array
};
