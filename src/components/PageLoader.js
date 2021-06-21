import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  circularProgressRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999999,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

/**
 * Renders loading spinner.
 * @returns {JSX.Element}
 * @constructor
 */
const PageLoader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.circularProgressRoot}>
      <CircularProgress />
    </Box>
  );
};

export default PageLoader;
