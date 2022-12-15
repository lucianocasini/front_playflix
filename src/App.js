import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, setFavorites } from './store/user';

import Header from './components/Header';

import LoginForm from './pages/Login';
import ContentDetails from './pages/ContentDetails';
import Movies from './pages/Movies';
import RegisterForm from './pages/Register';
import SearchResults from './pages/SearchResults';
import TvShow from './pages/TvShow';
import MyFavorites from './pages/MyFavorites';
import Home from './pages/Home';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/user/me')
      .then((res) => res.data)
      .then((user) => dispatch(setUser(user)));

    axios
      .get('/api/user/favorites')
      .then((res) => res.data)
      .then((favorites) => dispatch(setFavorites(favorites)));
  }, [user.id]);
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:id" element={<ContentDetails />} />
          <Route path="/tv-show" element={<TvShow />} />
          <Route path="/tv-show/:id" element={<ContentDetails />} />
          <Route path="/my-favorites" element={<MyFavorites />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
