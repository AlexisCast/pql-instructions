import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/root/Root/Root';
import Error from './routes/root/Error/Error';

import Home from './routes/home/Home';

import TeamIncantation, {
  loader as teamIncantationLoader
} from './routes/teamIncantation/TeamIncantation';

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
        element: (
          <div>
            <h1>Teams Page</h1>
          </div>
        )
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
