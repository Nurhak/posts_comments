import React from "react";
import User from "./User";
import PropTypes from "prop-types";
import CmtList from "../../../../components/CmtList.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflowX: "hidden"
  }
}));

const UserList = ({users, selectedUser}) => {
  const classes = useStyles();
  return (
    <CmtList
      data={users}
      className={classes.root}
      renderRow={data => {
        return <User key={data.id} user={data} selectedUser={selectedUser} />;
      }}
    />
  );
};

export default UserList;

UserList.prototype = {
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.object.isRequired
};
