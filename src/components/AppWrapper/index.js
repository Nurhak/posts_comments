import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {fetchError} from "../../redux/actions";
import PageLoader from "../PageLoader";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  circularProgressRoot: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBody: {
    width: "100%",
    height: "calc(100vh - 65px)",
    padding: 50
  },
  header: {
    height: 48
  }
}));

const AppWrapper = ({children}) => {
  const [ showLayoutLoader, setLayoutLoader ] = useState(true);
  const {error, loading, message} = useSelector(({common}) => common);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setLayoutLoader(false);
  }, []);

  useEffect(
    () => {
      setTimeout(() => {
        dispatch(fetchError(""));
      }, 3000);
    },
    [ dispatch, error, message ]
  );

  if (showLayoutLoader) {
    return (
      <div className={classes.circularProgressRoot}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Posts and Comments
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.appBody}>
        {children}
      </Grid>
      {loading && <PageLoader />}
      {error && <Snackbar open={Boolean(error)} message={error} />}
      {message && <Snackbar open={Boolean(error)} message={message} />}
    </Box>
  );
};

export default AppWrapper;
