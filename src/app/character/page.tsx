'use client';
import React from 'react';
// import { Provider } from 'react-redux';
// import ThemeProvider from '../components/Context';
// import { store } from '../store/store';
import * as s from '../pages/MainPage/MainPage.module.scss';
import { useGetCharactersQuery } from '../../store/api/charactersApi';
import { Search } from '../../components/Search';
import RefreshButton from '../../components/RefreshButton';
import { Section } from '../../components/Section';
import Pagination from '../../components/Pagination';
import { CardList } from '../../components/CardList';
import FlyoutElement from '../../components/FlyoutElement';

export const App = () => {
  const { data, error, isLoading } = useGetCharactersQuery({
    page: '1',
    name: '',
  });
  const { info, results } = data || {};

  return (
    <main data-testid="main-page">
      <div className={s['option-wrapper']}>
        <Search
          search={'' /* searchLS */}
          onSubmit={() => {} /* handleSubmit */}
        />
        <RefreshButton />
      </div>
      <div className={s['content-wrapper']}>
        <Section loading={isLoading} error={error}>
          <Pagination pages={info?.pages} />
          <CardList items={results} />
        </Section>
      </div>
      <FlyoutElement />
    </main>
  );
};

export default App;
