'use client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from '../components/Context';
import { store } from '../store/store';
import Layout from '../pages/Layout';
import { MainPage } from '../pages/MainPage';

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <MainPage />
        </Layout>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

export default App;
