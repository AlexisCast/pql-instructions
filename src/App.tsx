import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/root/Root/Root';
import Error from './routes/root/Error/Error';

import Home from './routes/home/Home';

import TeamIncantation, {
  loader as teamIncantationLoader
} from './routes/teamIncantation/TeamIncantation';

import Teams, { loader as teamsLoader } from './routes/teams/Teams';
import TeamDetail, { loader as teamDetailLoader } from './routes/teamdetail/TeamDetail';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'teamIncantation',
        children: [
          {
            index: true,
            element: <TeamIncantation />,
            loader: teamIncantationLoader
          }
        ]
      },
      {
        path: 'teams',
        children: [
          {
            index: true,
            element: <Teams />,
            loader: teamsLoader
          },
          {
            path: ':teamId',
            id: 'team-detail',
            loader: teamDetailLoader,
            children: [
              {
                index: true,
                element: <TeamDetail />
              }
            ]
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
