import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
