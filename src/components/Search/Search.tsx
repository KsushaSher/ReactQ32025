import React from 'react';
import s from './Search.module.scss';

interface Props {
  onSubmit: (search: string) => void;
}

interface State {
  search: string;
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { search: localStorage.getItem('search') || '' };
  }

  componentDidMount(): void {
    this.props.onSubmit(this.state.search);
  }

  handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    localStorage.setItem('search', this.state.search.trim());
  };

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value }, () => {
      localStorage.setItem('search', this.state.search.trim());
    });
  };

  render() {
    return (
      <form className={s['search-form']} onSubmit={this.handleOnSubmit}>
        <input
          placeholder="search"
          value={this.state.search}
          onChange={this.handleOnChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
