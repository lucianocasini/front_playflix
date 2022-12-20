import axios from 'axios';

const userLogin = async (username, password) => {
  return axios.post('/api/user/login', {
    username,
    password,
  });
};

const userRegister = async (username, email, password, confirmPassword) => {
  return axios.post('/api/user/', {
    username,
    email,
    password,
    confirmPassword,
  });
};

const userLogout = async () => {
  return axios.get('/api/user/logout');
};

const addFavorite = async (id, type, title, poster) => {
  return axios.post('/api/user/favorites', {
    id,
    type,
    title,
    poster,
  });
};

const removeFavorite = async (id) => {
  return axios.delete(`/api/user/favorites/${id}`);
};

export { userLogin, userRegister, userLogout, addFavorite, removeFavorite };
