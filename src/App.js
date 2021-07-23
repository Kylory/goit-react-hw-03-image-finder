import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ApiServiseFetch from './components/ApiServise/ApiServise';
import Loader from './components/Loader/Loader';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    largeimageurl: '',
    isLoading: false,
  };

  API_OPTIONS = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '21804857-e4d02e1e62ab2bb6123c0439f',
    IMAGE_TYPE: 'image_type=photo&orientation=horizontal',
    PER_PAGE: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.fetchImages();
    }
  }

  formSubmitHandler = searchQuery => {
    this.setState({ query: searchQuery, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const { BASE_URL, API_KEY, IMAGE_TYPE, PER_PAGE } = this.API_OPTIONS;
    const options = {
      query,
      page,
      BASE_URL,
      API_KEY,
      IMAGE_TYPE,
      PER_PAGE,
    };

    this.setState({ isLoading: true });

    setTimeout(() => {
      ApiServiseFetch(options)
        .then(response =>
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
            page: prevState.page + 1,
          })),
        )
        .then(this.scrollToButton)
        .finally(this.setState({ isLoading: false }));
    }, 500);
  };

  scrollToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = e => {
    this.setState(({ showModal }) => ({
      showModal: true,
      largeimageurl: e.target.getAttribute('largeimageurl'),
    }));
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState(({ showModal }) => ({
        showModal: false,
        largeimageurl: '',
      }));
    }
  };

  render() {
    const { images, showModal, largeimageurl, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery openModal={this.openModal} images={images} />
        {images.length > 0 && <Button onClick={this.fetchImages}></Button>}
        {showModal && (
          <Modal
            closeModal={this.closeModal}
            largeimageurl={largeimageurl}
          ></Modal>
        )}
        {isLoading && <Loader></Loader>}
      </>
    );
  }
}

export default App;
