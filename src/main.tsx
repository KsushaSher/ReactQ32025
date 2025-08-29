import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './router/router';
import './styles//main.scss';
import { ErrorBoundary } from './components/ErrorBoundary';
import DataProvider from './components/DataContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found!');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <DataProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </DataProvider>
    </ErrorBoundary>
  </StrictMode>
);
