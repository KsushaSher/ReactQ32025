import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import './styles//main.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found!');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
