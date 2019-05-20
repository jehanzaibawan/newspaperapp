/**
 *
 * Tests for Thumbnail
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Thumbnail from '../index';

describe('<Thumbnail />', () => {
  it('Should render and match the snapshot', () => {
    const props = {
      source: 'fake-image-source',
    };

    const {
      container: { firstChild },
    } = render(<Thumbnail {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
