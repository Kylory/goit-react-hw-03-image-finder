import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ApiServiseFetch from './components/ApiServise/ApiServise';
import Loader from './components/Loader/Loader';

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

  //fetch при оновленні query
  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.fetchImages();
    }
  }

  // Приймає searchQuery з Searchbar і записує в query
  formSubmitHandler = searchQuery => {
    this.setState({ query: searchQuery, page: 1, images: [] });
  };

  //fetch
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

    // setTimeout для того, щоб встиг показатися Loader
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
    }, 400);
  };

  // Автоскрол після fetch
  scrollToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Відкриття модалки
  // setTimeout для того, щоб встиг показатися Loader
  openModal = e => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState(({ showModal }) => ({
        showModal: true,
        largeimageurl: e.target.getAttribute('largeimageurl'),
      }));
      this.setState({ isLoading: false });
    }, 300);
  };

  // Закриття модалки при кліку в оверлей, або при натисканні Escape
  // closeModal = e => {
  //   if (e.target === e.currentTarget || e.code === 'Escape') {
  //     this.setState(({ showModal }) => ({
  //       showModal: false,
  //       largeimageurl: '',
  //     }));
  //   }
  // };

  // Закриття модалки
  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: false,
      largeimageurl: '',
    }));
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
        {isLoading && <Loader class={'Loader'}></Loader>}
      </>
    );
  }
}

export default App;
