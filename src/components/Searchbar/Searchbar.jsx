import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onChangeQuery = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  // Передає query в ApiServise
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
      <header className="Searchbar">
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
      </header>
    );
  }
}

export default Searchbar;
