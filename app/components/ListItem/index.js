/**
 *
 * ListItem
 *
 */

import React, { memo, PureComponent } from 'react';
import ClampLines from 'react-clamp-lines';
import Thumbnail from 'components/Thumbnail';
import DateWithIcon from 'components/DateWithIcon';
import ClickableArrow from 'components/ClickableArrow';
import './style.less';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends PureComponent {
  static propTypes = {
    thumbnailSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedOn: PropTypes.string.isRequired,
  };

  onClickHandler = () => {};

  render() {
    const { thumbnailSrc, title, subTitle, author, publishedOn } = this.props;
    return (
      <div className="npApp_list-item">
        <div className="list-item-thumbnail">
          <Thumbnail source={thumbnailSrc} />
        </div>
        <div className="list-item-details">
          <ClampLines
            text={title}
            id="title"
            lines={2}
            ellipsis="..."
            className="title"
            innerElement="span"
            buttons={false}
          />
          <ClampLines
            text={subTitle}
            id="sub-title"
            lines={1}
            ellipsis="..."
            className="sub-title"
            innerElement="span"
            buttons={false}
          />
          <div className="info">
            <div className="author">{author}</div>
            <DateWithIcon publishedOn={publishedOn} />
          </div>
        </div>
        <ClickableArrow
          className="list-item-arrow"
          onClick={this.onClickHandler}
        />
      </div>
    );
  }
}

export default memo(ListItem);
