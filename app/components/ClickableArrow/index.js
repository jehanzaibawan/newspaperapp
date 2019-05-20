/**
 *
 * ClickableArrow
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export const keyDownEventHandler = () => true;

export const ClickableArrow = props => (
  <div className={`npApp_clickable-arrow ${props.className}`}>
    <span
      data-testid="list-item-arrow"
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      onKeyDown={keyDownEventHandler}
    />
  </div>
);

ClickableArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ClickableArrow.defaultProps = {
  className: '',
};

export default memo(ClickableArrow);
