/**
 *
 * Thumbnail
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.less';

const Thumbnail = props => (
  <div className="npApp_thumbnail">{props.source}</div>
);

Thumbnail.propTypes = {
  source: PropTypes.string,
};

Thumbnail.defaultProps = {
  source: <span>&nbsp;</span>, // TODO: Replace space with the image
};

export default memo(Thumbnail);
