import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/root/Root/Root';

const router = createBrowserRouter([
  {
    path: '/',
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
        element: (
          <div>
            <h1>Team Incantation</h1>
          </div>
        )
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
