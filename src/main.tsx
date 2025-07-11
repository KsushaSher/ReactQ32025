import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import React from 'react';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('There is no such element');
}
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
