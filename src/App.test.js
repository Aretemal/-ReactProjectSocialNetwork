import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

test('renders learn react link', () => { // eslint-disable-line
  render(<App />); // eslint-disable-line
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // eslint-disable-line
});
