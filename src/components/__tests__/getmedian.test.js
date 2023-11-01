/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import GetMedian from '../getmedian';
import axios from 'axios';

jest.mock('axios')

test('displays an error for empty input', () => {
    render(<GetMedian />);
    fireEvent.click(screen.getByText('Find Medians'));
    const input = screen.getByText('Please enter a valid number (n)')
    expect(input.textContent).toBeDefined();
});

test('displays median prime numbers on successful request', async () => {
  const mockResponse = { data: { medians: [3, 5] } };
  axios.get.mockResolvedValueOnce(mockResponse);

  render(<GetMedian />);
  fireEvent.change(screen.getByPlaceholderText('Enter a number (n)'), { target: { value: '10' } });
  fireEvent.click(screen.getByText('Find Medians'));

  await waitFor(() => {
      expect(screen.getByText('Median Prime Numbers: 3, 5')).toBeDefined();
  });
});

test('displays an error on failed request', async () => {
  const mockError = new Error('Request failed');
  axios.get.mockRejectedValueOnce(mockError);

  render(<GetMedian />);
  fireEvent.change(screen.getByPlaceholderText('Enter a number (n)'), { target: { value: '10' } });
  fireEvent.click(screen.getByText('Find Medians'));

  await waitFor(() => {
      expect(screen.getByText('Error: Request failed')).toBeDefined();
  });
});
