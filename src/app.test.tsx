import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

it('renders a header', () => {
  render(<App />);
  const header = screen.getByText(/let's do this/i);
  expect(header).toBeInTheDocument();
  expect(header).toHaveAttribute("href", "/")
});

it('renders a footer', () => {
  render(<App />);
  const footer = screen.getByText(/github repository/i);
  expect(footer).toBeInTheDocument();
  expect(footer).toHaveAttribute("href", "https://github.com/ruiined/race-startlist")
});
