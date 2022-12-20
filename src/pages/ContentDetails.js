import React, { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import Loading from '../commons/Loading';
import FavoriteButton from '../components/FavoriteButton';

import { FaStar, FaCalendarAlt, FaTheaterMasks } from 'react-icons/fa';
import noImage from '../assets/images/no-image.png';
import '../assets/styles/contentDetails.scss';
import { getContent } from '../services/content';

const ContentDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: contentId } = useParams();
  const contentType = useMatch('/movie/:id') ? 'movie' : 'tv-show';

  const user = useSelector((state) => state.user);

  useEffect(() => {
    getContent(contentType, contentId)
      .then((res) => res.data)
      .then((details) => {
        details.genre = details.genres.map((genre) => genre.name).join(', ');
        details.vote_average = Math.round(details.vote_average);
        details.poster_path = details.poster_path
          ? details.poster_path
          : noImage;
        setData(details);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [contentId, contentType]);

  if (isLoading) return <Loading />;

  return (
    <div
      className="contentDetails"
      style={{ backgroundImage: `url("${data.backdrop_path}")` }}
    >
      <div className="bg-opacity"></div>
      <div className="layout">
        <div className="poster">
          <img src={data.poster_path} alt={data.title} />
          {user.id && (
            <FavoriteButton
              user={user}
              content={data}
              contentId={contentId}
              contentType={contentType}
            />
          )}
        </div>
        <div className="description">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div className="details">
            <div>
              <FaStar className="icon-star" />{' '}
              <span>
                {data.vote_average}
                <span className="vote-max">/10</span>
              </span>
            </div>
            <div>
              <FaCalendarAlt className="icon-calendar" />{' '}
              <span>{data.release_date}</span>
            </div>
            <div>
              <FaTheaterMasks /> <span>{data.genre}</span>
            </div>
          </div>
          <div className="sinopsis">
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
