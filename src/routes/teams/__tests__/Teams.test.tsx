import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams, { TeamProps } from '../Teams';

// Mock data
const mockTeams: TeamProps[] = [
  { id: 1, name: 'Team A', slogan: 'We are Team A' },
  { id: 2, name: 'Team B', slogan: 'We are Team B' }
];

// Mock the loader function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => mockTeams,
  useNavigate: () => jest.fn()
}));

describe('Teams Component', () => {
  test('renders the teams list', () => {
    render(
      <MemoryRouter>
        <Teams />
      </MemoryRouter>
    );
    // screen.debug();

    // Check if the team names are rendered
    expect(screen.getByText('Team A')).toBeInTheDocument();
    expect(screen.getByText('Team B')).toBeInTheDocument();

    // Check if the slogans are rendered
    expect(screen.getByText('We are Team A')).toBeInTheDocument();
    expect(screen.getByText('We are Team B')).toBeInTheDocument();
  });
});
