import React from 'react';
import s from './SearchForm.module.scss';

interface Props {
  onSubmit: (search: string) => void;
}

interface State {
  search: string;
}

class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount(): void {
    this.props.onSubmit(this.state.search);
  }

  handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };
  render() {
    return (
      <form className={s['search-form']} onSubmit={this.handleOnSubmit}>
        <input placeholder="search" defaultValue={this.state.search} />
        <button type="button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
