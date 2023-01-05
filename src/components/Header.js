import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from './Search';
import UserMenu from './UserMenu';

import { FaHome, FaFilm, FaTv, FaStar, FaBars } from 'react-icons/fa';
import '../assets/styles/header.scss';
import ResponsiveMenu from './ResponsiveMenu';

const Header = () => {
  const user = useSelector((state) => state.user);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const handleResponsiveMenu = () => {
    setShowResponsiveMenu(true);
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflow = showResponsiveMenu ? 'hidden' : 'auto';
  }, [showResponsiveMenu]);
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
          <FaBars
            className="icon-responsive-menu"
            onClick={handleResponsiveMenu}
          />
        </div>
      </div>
      <div className="header-space"></div>
      {showResponsiveMenu && (
        <ResponsiveMenu
          setShowResponsiveMenu={setShowResponsiveMenu}
          user={user}
        />
      )}
    </>
  );
};

export default Header;
