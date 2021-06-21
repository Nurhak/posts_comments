import React from "react";

import PropTypes from "prop-types";

import ListView from "./ListView";

/**
 * Main list controller.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CmtList = ({...props}) => {
  return <ListView {...props} />;
};

export default CmtList;

CmtList.propTypes = {
  ListEmptyComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func
};
CmtList.defaultProps = {
  data: []
};
