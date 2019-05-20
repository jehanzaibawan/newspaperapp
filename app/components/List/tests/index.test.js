/**
 *
 * Tests for List
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { articles } from 'mockData/articles';

import { List } from '../index';

describe('<List />', () => {
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<List articles={articles} />);
    expect(firstChild).toMatchSnapshot();
  });
  it('Should render and match the snapshot if articles.results length is less than zero', () => {
    articles.results = [];

    const {
      container: { firstChild },
    } = render(<List articles={articles} />);
    expect(firstChild).toMatchSnapshot();
  });
});
