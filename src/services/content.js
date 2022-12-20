import axios from 'axios';

const getContent = async (contentType, contentId) => {
  return axios.get(`/api/${contentType}/${contentId}`);
};

const getMovies = async () => {
  return axios.get('/api/movie');
};

const getTvShows = async () => {
  return axios.get('/api/tv-show');
};

const search = async (queryStr) => {
  return axios.get(`/api/search?query=${queryStr}`);
};

export { getContent, getMovies, getTvShows, search };
