import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Loading from '../commons/Loading';
import MediaItem from '../commons/MediaItem';
import MediaLayout from '../commons/MediaLayout';
import { getMovies } from '../services/content';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((res) => res.data)
      .then((movies) => setMovies(movies.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) return <Loading />;
  return (
    <MediaLayout title="Películas">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MediaItem data={movie} />
        </Link>
      ))}
    </MediaLayout>
  );
};

export default Movies;
