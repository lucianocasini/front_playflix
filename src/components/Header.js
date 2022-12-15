import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from './Search';
import UserMenu from './UserMenu';

import { FaHome, FaFilm, FaTv, FaStar } from 'react-icons/fa';
import '../assets/styles/header.scss';

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">PlayFlix</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/movie">
                <FaFilm /> <span>Películas</span>
              </Link>
            </li>
            <li>
              <Link to="/tv-show">
                <FaTv /> <span>Series</span>
              </Link>
            </li>
            {user.id && (
              <li>
                <Link to="/my-favorites">
                  <FaStar /> <span>Mis favoritos</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="right">
          <Search />
          <UserMenu />
        </div>
      </div>
      <div className="header-space"></div>
    </>
  );
};

export default Header;
