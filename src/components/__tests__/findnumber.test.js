/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import FindNumber from '../findnumber';

test('FindNumber renders "Hello Worldgg!"', () => {
  const { getByTestId } = render(<FindNumber />);
  const divElement = getByTestId('findnumber-1').textContent;
  expect(divElement).toBeTruthy();
  expect(divElement).toEqual('Hello Worldgg!');
});
