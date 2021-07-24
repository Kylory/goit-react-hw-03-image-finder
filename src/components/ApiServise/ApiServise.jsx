import axios from 'axios';
import PropTypes from 'prop-types';

const ApiServiseFetch = ({
  query,
  page,
  BASE_URL,
  API_KEY,
  IMAGE_TYPE,
  PER_PAGE,
}) => {
  return axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${IMAGE_TYPE}&per_page=${PER_PAGE}`,
  );
};

ApiServiseFetch.propTypes = {
  options: PropTypes.shape({
    query: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    API_KEY: PropTypes.string.isRequired,
    IMAGE_TYPE: PropTypes.string.isRequired,
    PER_PAGE: PropTypes.number.isRequired,
  }),
};

export default ApiServiseFetch;
