import './styles/global.scss';
import './styles/constants.scss';
import './styles//normalize.css';
import { Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import { MainPage } from './pages/MainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
