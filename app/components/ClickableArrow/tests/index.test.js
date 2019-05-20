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

import ClickableArrow, { keyDownEventHandler } from '../index';

describe('<ClickableArrow />', () => {
  it('Should render and match the snapshot', () => {
    const props = {
      onClick: () => {},
    };

    const {
      container: { firstChild },
    } = render(<ClickableArrow {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});

describe('keyDownEventHandler()', () => {
  it('Should be call when key down event is triggered', () => {
    expect(keyDownEventHandler()).toBe(true);
  });
});
