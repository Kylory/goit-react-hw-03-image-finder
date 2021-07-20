import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onChangeQuery = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.onChangeQuery}
        />
      </form>
    );
  }
}

export default Searchbar;
