/**
 *
 * Tests for Articles
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import history from 'utils/history';
import { articles } from 'mockData/articles';
import { Articles } from '../index';
const initialState = {};

describe('<Articles />', () => {
  it('Should render and match the snapshot', () => {
    const props = {
      requestArticlesData: jest.fn(),
      articles,
    };
    const store = configureStore(initialState, history);
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Articles {...props} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
