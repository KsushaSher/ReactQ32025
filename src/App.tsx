import s from './styles/App.module.scss';
import SearchForm from './components/SearchForm/SearchForm.tsx';
import React from 'react';
import type {
  AllItems,
  ResultsProperties,
  SearchItems,
} from './models/index.ts';

export interface AppState {
  items: ResultsProperties[];
}

type AppProps = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [] };
  }

  handleSubmit = (search: string) => {
    fetch(`https://swapi.tech/api/people/?limit=10&name=${search}`)
      .then((res) => res.json())
      .then((res: SearchItems | AllItems) => {
        const items =
          'result' in res
            ? res.result.map((item) => ({
                ...item.properties,
                uid: item.uid,
              }))
            : res.results;

        this.setState({ items: items });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <main>
        <header className={s.header}>
          <div className={s.wrapper}>
            <SearchForm onSubmit={this.handleSubmit} />
          </div>
        </header>
        <section>
          <div className={s.wrapper}>
            {this.state.items.length === 0 ? (
              <p>No results found</p>
            ) : (
              <ul>
                {this.state.items.map((item) => (
                  <li key={item.url}>
                    <strong>{item.name}</strong>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
