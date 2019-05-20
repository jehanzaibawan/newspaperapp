/**
 *
 * Articles
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import List from 'components/List';
import makeSelectArticles from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestArticlesData } from './actions';

export const Articles = props => {
  useInjectReducer({ key: 'articles', reducer });
  useInjectSaga({ key: 'articles', saga });

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      props.requestArticlesData();
    }

    setInitialized(true);
  });

  return <List articles={props.articles} />;
};

Articles.propTypes = {
  requestArticlesData: PropTypes.func.isRequired,
  articles: PropTypes.shape({}).isRequired,
};

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestArticlesData }, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Articles);
