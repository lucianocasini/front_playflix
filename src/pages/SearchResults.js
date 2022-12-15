import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

import Loading from "../commons/Loading";
import MediaItem from "../commons/MediaItem";
import MediaLayout from "../commons/MediaLayout";

const SearchResults = () => {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const queryURL = useLocation().search;
  const queryStr = new URLSearchParams(queryURL).get("query");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/search?query=${queryStr}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [queryStr]);

  if (isLoading) return <Loading />;

  return (
    <>
      <div style={{ marginBottom: "14px", fontSize: "20px" }}>
        Resultados de su búsqueda
      </div>
      {results.movies.length === 0 && results.tvshow.length === 0 && (
        <p>No se encontraron resultados para su búsqueda</p>
      )}
      {results.movies.length > 0 && (
        <MediaLayout title="Películas">
          {results.movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MediaItem key={movie.id} data={movie} />
            </Link>
          ))}
        </MediaLayout>
      )}

      {results.tvshow.length > 0 && (
        <MediaLayout title="Series">
          {results.tvshow.map((serie) => (
            <Link to={`/tv-show/${serie.id}`} key={serie.id}>
              <MediaItem key={serie.id} data={serie} />
            </Link>
          ))}
        </MediaLayout>
      )}
    </>
  );
};

export default SearchResults;
