// import React from 'react';
// import Searchbar from '../Searchbar/Searchbar';
import axios from 'axios';

// class ApiServise extends Component {
//   state = {
//     images: [],
//     query: '',
//     page: 1,
//   };

//   //Приймає query з Searchbar і робить запит
//   formSubmitHandler = searchQuery => {
//     this.setState({ query: searchQuery });
//     axios
//       .get(
//         // `${this.BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_KEY}`,
//         `https://pixabay.com/api/?q=${searchQuery}&page=1&key=21804857-e4d02e1e62ab2bb6123c0439f&image_type=photo&orientation=horizontal&per_page=12`,
//       )
//         .then(response => console.log(response.data.hits));
//       .then(response => this.state.images.push(...response.data.hits));
//       .then(response =>
//         this.setState(prevState => ({
//           images: [...prevState.images, ...response.data.hits],
//         })),
//       );
//       .then(response => response.data.hits);
//   };

//   render() {
//     return <Searchbar onSubmit={this.formSubmitHandler} />;
//   }
// }

const ApiServise = searchQuery => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=21804857-e4d02e1e62ab2bb6123c0439f&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default ApiServise;
