'use client';
import React from 'react';
// import { Provider } from 'react-redux';
// import ThemeProvider from '../components/Context';
// import { store } from '../store/store';
import * as s from '../pages/MainPage/MainPage.module.scss';
import { Search } from '../components/Search';
import RefreshButton from '../components/RefreshButton';
import FlyoutElement from '../components/FlyoutElement';
import { Section } from '../components/Section';
import Pagination from '../components/Pagination';
import { CardList } from '../components/CardList';
import { useGetCharactersQuery } from '../store/api/charactersApi';
import CardDetail from '../components/CardDetail';
import { useSearchParams } from 'next/navigation';

export const App = () => {
  const { data, error, isLoading } = useGetCharactersQuery({
    page: '1',
    name: '',
  });
  const { info, results } = data || {};
  const searchParams = useSearchParams();
  const id = searchParams?.get('details') ?? null;

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
          <div className={s['cards-wrapper']}>
            <CardList items={results} />
            {id && <CardDetail id={id} />}
          </div>
        </Section>
      </div>
      <FlyoutElement />
    </main>
  );
};

export default App;
