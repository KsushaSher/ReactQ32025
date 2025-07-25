import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/global.scss';
import './styles/constants.scss';
import './styles//normalize.css';
import { MainPage } from './pages/MainPage';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
};

export default App;
