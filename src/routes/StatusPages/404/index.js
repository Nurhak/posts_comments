import React from "react";
import Box from "@material-ui/core/Box";
import {Button, fade} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useHistory} from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 1
  },
  errorNumber: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 30,
    textShadow: "10px 6px 8px hsla(0,0%,45.9%,.8)"
  },
  searchRoot: {
    position: "relative",
    width: 260,
    [theme.breakpoints.up("md")]: {
      width: 350
    },
    "& .searchBtn": {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1
    },
    "& .MuiInputBase-root": {
      width: "100%"
    },
    "& .MuiInputBase-input": {
      height: 48,
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      boxSizing: "border-box",
      padding: "5px 50px 5px 15px",
      transition: theme.transitions.create([ "border-color", "box-shadow" ]),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      }
    }
  }
}));

/**
 * Not found page.
 * @returns {JSX.Element}
 */
const Error404 = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box fontSize={{xs: 100, sm: 160}} className={classes.errorNumber}>
        404
      </Box>
      <Box fontSize={{xs: 16, sm: 24}} mb={8} color="grey.500">
        Page not found!
      </Box>
      <Box mt={8}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default Error404;
