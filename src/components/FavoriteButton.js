import React from 'react';

import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/user';

import {
  addFavorite as addFavoriteAPI,
  removeFavorite as removeFavoriteAPI,
} from '../services/user';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoriteButton = ({ content, user, contentId, contentType }) => {
  const userFavorites = user.favorites || [];
  const favorite = userFavorites.find(
    (fav) =>
      fav.contentId === parseInt(contentId) && fav.contentType === contentType
  );
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    addFavoriteAPI(
      contentId,
      contentType,
      content.title,
      content.poster_path_thumb
    )
      .then((res) => res.data)
      .then((fav) => dispatch(addFavorite(fav)))
      .catch((err) => alert('Ha ocurrido un error al agregar a favoritos'));
  };

  const handleRemoveFavorite = () => {
    removeFavoriteAPI(favorite.id)
      .then(() => dispatch(removeFavorite(favorite)))
      .catch((err) => alert('Ha ocurrido un error al quitar de favoritos'));
  };

  return (
    user.id &&
    (!favorite ? (
      <button onClick={handleAddFavorite}>
        <FaRegHeart className="add-fav-icon" /> <span>Agregar a favoritos</span>
      </button>
    ) : (
      <button onClick={handleRemoveFavorite}>
        <FaHeart className="remove-fav-icon" />{' '}
        <span>Agregada a favoritos</span>
      </button>
    ))
  );
};

export default FavoriteButton;
