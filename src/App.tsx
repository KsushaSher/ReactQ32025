import { ErrorBoundary } from './components/ErrorBoundary';
import React from 'react';
import './styles/global.scss';
import './styles/constants.scss';
import './styles//normalize.css';
import { MainPage } from './pages/MainPage';

type AppProps = Record<string, never>;
type AppState = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    );
  }
}

export default App;
