import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import TeamIncantation from '../TeamIncantation';

expect.extend(toHaveNoViolations);

test('TeamIncantation should have no accessibility violations', async () => {
  const { container } = render(<TeamIncantation />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('it renders the Home Page title', () => {
  render(<TeamIncantation />);
  const headerElement = screen.getByRole('heading', {
    name: /team incantation/i
  });
  expect(headerElement).toBeInTheDocument();
});

test('it renders the Home Page inputs and create button', () => {
  render(<TeamIncantation />);
  // screen.debug();

  // Find the inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  });
  const descriptionInput = screen.getByRole('textbox', {
    name: /description/i
  });

  //Find button
  const createTeamButton = screen.getByRole('button', {
    name: /create team/i
  });

  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(createTeamButton).toBeInTheDocument();
});

test('it renders the table', () => {
  render(<TeamIncantation />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();

  // Find table headers
  //TODO:update to 5, will remove id
  const tableHeaders = screen.getAllByRole('columnheader');
  expect(tableHeaders.length).toBe(6);
});
