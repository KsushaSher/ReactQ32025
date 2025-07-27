import './styles/global.scss';
import './styles/constants.scss';
import './styles//normalize.css';
import { Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './pages/Layout';
import CardDetail from './components/CardDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />}>
          <Route path="character/:id" element={<CardDetail />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
