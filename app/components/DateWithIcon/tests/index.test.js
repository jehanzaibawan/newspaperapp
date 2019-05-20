/**
 *
 * Tests for DateWithIcon
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import DateWithIcon from '../index';

describe('<DateWithIcon />', () => {
  it('Should render and match the snapshot', () => {
    const props = {
      publishedOn: '2016-01-01',
    };

    const {
      container: { firstChild },
    } = render(<DateWithIcon {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
