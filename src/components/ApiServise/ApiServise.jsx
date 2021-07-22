import axios from 'axios';

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

export default ApiServiseFetch;
