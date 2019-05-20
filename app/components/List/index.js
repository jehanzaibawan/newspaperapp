/**
 *
 * List
 *
 */

import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { compose } from 'redux';
import './style.less';

// eslint-disable-next-line react/prefer-stateless-function
export class List extends PureComponent {
  static propTypes = {
    articles: PropTypes.shape({}).isRequired,
  };

  renderListItems = () => {
    const { articles } = this.props;
    if (articles.results && articles.results.length > 0) {
      return articles.results.map((article, index) => (
        <ListItem
          key={`article-${index + 1}`}
          thumbnailSrc=""
          title={article.title}
          subTitle={article.abstract}
          author={article.source}
          publishedOn={article.published_date}
        />
      ));
    }
    return null;
  };

  render() {
    return <div className="npApp_list">{this.renderListItems()}</div>;
  }
}

export default compose(memo)(List);
