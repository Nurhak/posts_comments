import React from "react";
import User from "./User";
import PropTypes from "prop-types";
import CmtList from "../../../../components/CmtList.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 65px)",
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
