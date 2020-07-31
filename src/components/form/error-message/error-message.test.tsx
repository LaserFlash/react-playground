import React from 'react';
import { render } from '@testing-library/react';
import ErrorNotice from './error-message';

const props = {
  children: 'error children',
};

describe('Error Notice', () => {
  test('Basic Render', () => {
    const { container, queryByText } = render(<ErrorNotice {...props} />);
    expect(container).toBeTruthy();
    expect(queryByText(props.children)).toBeTruthy();
  });
});
