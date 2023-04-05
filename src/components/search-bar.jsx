import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    this.state = search();
  }

  render() {
    return (
      <input type="text" onChange={this.searchFunction} className="form-control form-search" />
    );
  }
}

export default SearchBar;
