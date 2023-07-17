import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'App';
import { ClinicaltrialsSearchPage } from 'pages/clinicaltrialsSearchPage';

const router = createBrowserRouter([{ path: '/', element: <ClinicaltrialsSearchPage /> }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
