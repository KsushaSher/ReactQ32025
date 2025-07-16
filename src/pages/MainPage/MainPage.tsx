import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import type { Item } from '../../models';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import React from 'react';

type Props = Record<string, never>;

interface State {
  items: Item[];
  loading: boolean;
  error: string;
}

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { items: [], loading: false, error: '' };
  }

  handleSubmit = async (search: string) => {
    try {
      this.setState({ loading: true, error: '' });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=1&name=${search}`
      );

      if (!response.ok && response.status === 404) {
        throw new Error(`No results found`);
      }

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
      <>
        <Header>
          <Search onSubmit={this.handleSubmit} />
        </Header>
        <main>
          <Section loading={this.state.loading} error={this.state.error}>
            <CardList items={this.state.items} />
          </Section>
        </main>
      </>
    );
  }
}

export default MainPage;
