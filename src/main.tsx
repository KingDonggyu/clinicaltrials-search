import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'App';
import { ClinicaltrialsSearchPage } from 'pages/ClinicaltrialsSearchPage';
import { SickListProvider } from 'contexts/sickListContext';
import { ReactCacheProvider } from 'lib/react-cache';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SickListProvider>
        <ClinicaltrialsSearchPage />
      </SickListProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactCacheProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </ReactCacheProvider>
  </React.StrictMode>
);
