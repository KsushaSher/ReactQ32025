import s from './styles/App.module.scss';
import './styles/global.scss';
import { Search } from './components/Search';
import type { Item } from './models';
import { CardList } from './components/CardList';
import Spinner from './components/Spinner/Spinner.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ButtonError } from './components/ButtonError/index.ts';
import React from 'react';

export interface AppState {
  items: Item[];
  loading: boolean;
  error: string;
}

type AppProps = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [], loading: false, error: '' };
  }

  handleSubmit = async (search: string) => {
    try {
      this.setState({ loading: true, error: '' });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=1&name=${search}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ items: data.results, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error: error instanceof Error ? error.message : String(error),
      });
      console.error(error);
    }
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
            ) : this.state.error ? (
              <div className={s['error-message']}>{this.state.error}</div>
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
