import React from 'react';
import { Avatar, Box, Grid, Tooltip, withStyles } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getPosts, setUser } from '../../../../redux/actions/Blog.js';

const useStyles = makeStyles(theme => ({
  cellItem: {
    padding: 10,
    border: `1px solid #606050`,
    margin: 3,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    '&:hover, &.active': {
      backgroundColor: '#3f51b5',
      '& $titleRoot': {
        color: '#fff',
      },
      '& $chatDesRoot': {
        color: '#fff',
      },
    },
  },
  chatCellInfo: {
    width: 'calc(100% - 40px)',
    paddingLeft: 16,
  },
  titleRoot: {
    position: 'relative',
  },
  chatDesRoot: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 12,
    color: '#3f51b5',
  },
  chatAvatarRoot: {
    position: 'relative',
  },
  userInfo: {
    display: 'flex',
    width: 250,
  },
  userLabel: {
    display: 'inline-block',
  },
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

/**
 * Renders the custom user card.
 * @param user to be rendered within the card.
 * @param selectedUser to be tagged as active user.
 * @returns {JSX.Element}
 * @constructor
 */
const User = ({ user, selectedUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <HtmlTooltip
      title={
        <Grid container>
          <Grid item xs={12} className={classes.userInfo}>
            <p>
              <b>Phone: </b>
              {user.phone}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <b>Website: </b>
              {user.website}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <b>Company: </b>
              {user.company.name}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <b>Address: </b>
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
            </p>
          </Grid>
        </Grid>
      }>
      <Box
        className={clsx(classes.cellItem, {
          active: user === selectedUser,
        })}
        onClick={() => {
          dispatch(setUser(user));
          dispatch(getPosts(user.id));
        }}
        id="userCard">
        <Box className={classes.chatAvatarRoot}>
          <Avatar
            src={`https://eu.ui-avatars.com/api/?background=33658A&rounded=true&color=fff&name=${user.name}`}
            alt="User Avatar"
          />
        </Box>
        <Box className={classes.chatCellInfo}>
          <Box display="flex" alignItems="center">
            <Typography id="userName" component="div" variant="subtitle2" className={classes.titleRoot}>
              {user.name}
            </Typography>
          </Box>
          <Typography className={classes.chatDesRoot}>{user.email}</Typography>
        </Box>
      </Box>
    </HtmlTooltip>
  );
};

export default User;

User.prototype = {
  user: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
