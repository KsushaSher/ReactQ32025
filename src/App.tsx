import { ErrorBoundary } from './components/ErrorBoundary';
import React from 'react';
import Main from './components/Main/Main.tsx';
import './styles/global.scss';
import './styles/constants.scss';
import './styles//normalize.css';

type AppProps = Record<string, never>;
type AppState = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );
  }
}

export default App;
