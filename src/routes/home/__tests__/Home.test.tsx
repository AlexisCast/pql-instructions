import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Home from '../Home';

expect.extend(toHaveNoViolations);

test('Home page should have no accessibility violations', async () => {
  const { container } = render(<Home />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('it renders the Home Page', () => {
  render(<Home />);
  const headerElement = screen.getByRole('heading', {
    name: /welcome to premier quidditch league/i
  });
  expect(headerElement).toBeInTheDocument();
});
