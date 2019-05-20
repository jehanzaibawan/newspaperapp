/**
 *
 * DateWithIcon
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.less';

const DateWithIcon = props => (
  <div className="npApp_date-with-icon">
    <span />
    {props.publishedOn}
  </div>
);

DateWithIcon.propTypes = {
  publishedOn: PropTypes.string.isRequired,
};

export default memo(DateWithIcon);
