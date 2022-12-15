import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MediaItem from "../commons/MediaItem";
import MediaLayout from "../commons/MediaLayout";

const MyFavorites = () => {
  const user = useSelector((state) => state.user);
  const favorites = user.favorites || [];

  return (
    <MediaLayout title="Mis favoritos">
      {!user.id && <h2>Inicia sesión para ver tus favoritos</h2>}
      {user.id && favorites.length === 0 && <h2>Aún no tienes favoritos</h2>}
      {favorites &&
        favorites.map((fav) => {
          fav = { ...fav, poster_path_thumb: fav.poster };
          return (
            <Link to={`/${fav.contentType}/${fav.contentId}`} key={fav.id}>
              <MediaItem data={fav} />
            </Link>
          );
        })}
    </MediaLayout>
  );
};

export default MyFavorites;
