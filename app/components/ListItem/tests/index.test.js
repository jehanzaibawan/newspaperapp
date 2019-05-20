/**
 *
 * Tests for ListItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import ListItem from '../index';

describe('<ListItem />', () => {
  let props;

  beforeEach(() => {
    props = {
      thumbnailSrc: 'fake-image-source',
      title: 'fake-title',
      subTitle: 'fake-sub-title',
      author: 'fake-author-name',
      publishedOn: '2019-01-01',
    };
  });

  describe('<ListItem />', () => {
    it('Should render and match the snapshot', () => {
      const {
        container: { firstChild },
      } = render(<ListItem {...props} />);
      expect(firstChild).toMatchSnapshot();
    });
  });

  describe('onClickHandler()', () => {
    it('assert there are 6 regions', () => {
      const { getByTestId } = render(<ListItem {...props} />);
      fireEvent.click(getByTestId('list-item-arrow'));
      expect(document.querySelectorAll('.list-item-arrow').length).toBe(1);
    });
  });
});
