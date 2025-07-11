import s from './styles/App.module.scss';
import SearchForm from './components/SearchForm/SearchForm.tsx';
import React from 'react';
import type { Item } from './models/item.ts';

interface AppState {
  items: Item[];
}

type AppProps = Record<string, never>;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [] };
  }

  handleSubmit = () => {
    fetch(`https://swapi.tech/api/people/?page=1`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ items: res.results }, () => {
          console.log('Updated state:', this.state);
        });
      });
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
