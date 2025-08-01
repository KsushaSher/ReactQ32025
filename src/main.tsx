import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './router/router';
import { Provider } from 'react-redux';
import './styles//main.scss';
import { store } from './store/store';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found!');
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
