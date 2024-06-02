import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/root/Root/Root';
import Error from './routes/root/Error/Error';

import TeamIncantation from './routes/teamIncantation/TeamIncantation';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Welcome to Premier Quidditch League!</h1>
          </div>
        )
      },
      {
        path: 'teamIncantation',
        element: <TeamIncantation />
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
