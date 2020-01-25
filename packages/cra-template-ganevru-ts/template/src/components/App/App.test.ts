import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders: CRA Template Ganevru', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CRA Template Ganevru/i);
  expect(linkElement).toBeInTheDocument();
});
