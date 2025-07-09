import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="search" />
        <button type="button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
