import s from './styles/App.module.scss';
import { Search } from './components/Search';
import type { Item, Response } from './models';
import React from 'react';
import { CardList } from './components/CardList';
import Spinner from './components/Spinner/Spinner.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ButtonError } from './components/ButtonErrorBoundary';

export interface AppState {
  items: Item[];
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
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => res.json())
      .then((res: Response) => {
        this.setState({ items: res.results, loading: false }, () => {});
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.error(err);
      });
  };

  render() {
    return (
      <ErrorBoundary>
        <main>
          <header className={s.header}>
            <div className={`${s.wrapper} ${s['wrapper-header']}`}>
              <Search onSubmit={this.handleSubmit} />
              <ButtonError />
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
      </ErrorBoundary>
    );
  }
}

export default App;
