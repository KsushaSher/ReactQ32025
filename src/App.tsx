import s from './styles/App.module.scss';
import SearchForm from './components/SearchForm.tsx';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <main>
        <header className={s.header}>
          <p>header</p>
          <SearchForm />
        </header>
        <section></section>
      </main>
    );
  }
}

export default App;
