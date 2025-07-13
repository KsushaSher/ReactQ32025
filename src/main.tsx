import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import './styles/normalize.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('There is no such element');
}
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
