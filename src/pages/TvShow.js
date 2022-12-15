import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Loading from "../commons/Loading";
import MediaItem from "../commons/MediaItem";
import MediaLayout from "../commons/MediaLayout";

const TvShow = () => {
  const [tvshow, setTvShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/tv-show")
      .then((res) => res.data)
      .then((tv) => setTvShow(tv.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) return <Loading />;
  return (
    <MediaLayout title="Series">
      {tvshow.map((tv) => (
        <Link to={`/tv-show/${tv.id}`} key={tv.id}>
          <MediaItem key={tv.id} data={tv} />
        </Link>
      ))}
    </MediaLayout>
  );
};

export default TvShow;
