import s from './styles/App.module.scss';
import { Search } from './components/Search';
import type {
  AllItems,
  ResultsProperties,
  SearchItems,
} from './models/index.ts';
import React from 'react';
import { CardList } from './components/CardList';
import Spinner from './components/Spinner/Spinner.tsx';

export interface AppState {
  items: ResultsProperties[];
  loading: boolean;
}

type AppProps = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [], loading: false };
  }

  handleSubmit = (search: string) => {
    this.setState({ loading: true });
    fetch(`https://swapi.tech/api/people/?page=1&limit=10&name=${search}`)
      .then((res) => res.json())
      .then((res: SearchItems | AllItems) => {
        const items =
          'result' in res
            ? res.result.map((item) => ({
                ...item.properties,
                uid: item.uid,
              }))
            : res.results;

        this.setState({ items: items, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.error(err);
      });
  };

  render() {
    return (
      <main>
        <header className={s.header}>
          <div className={s.wrapper}>
            <Search onSubmit={this.handleSubmit} />
          </div>
        </header>
        <section>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <CardList items={this.state.items} />
          )}
        </section>
      </main>
    );
  }
}

export default App;
