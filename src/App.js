import React, { Component } from 'react';
// import Searchbar from './components/Searchbar/Searchbar';
import ApiServise from './components/ApiServise/ApiServise';

// import axios from 'axios';
// import shortid from 'shortid';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  // formSubmitHandler = searchQuery => {
  //   this.setState({ query: searchQuery });
  //   axios
  //     .get(
  //       // `${this.BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_KEY}`,
  //       `https://pixabay.com/api/?q=${searchQuery}&page=1&key=21804857-e4d02e1e62ab2bb6123c0439f&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //     .then(response => console.log(response.data.hits));
  // };

  render() {
    return (
      <>
        {/* <Searchbar onSubmit={this.formSubmitHandler} /> */}

        <ApiServise />
      </>
    );
  }
}

export default App;
