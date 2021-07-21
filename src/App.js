import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

// import ApiServise from './components/ApiServise/ApiServise';

import axios from 'axios';
// import shortid from 'shortid';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  formSubmitHandler = searchQuery => {
    this.setState({ query: searchQuery, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    return axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=21804857-e4d02e1e62ab2bb6123c0439f&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        })),
      );
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.fetchImages} images={this.state.images.length} />
      </>
    );
  }
}

export default App;
