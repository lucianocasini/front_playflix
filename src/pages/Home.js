import React from 'react';
import Search from '../components/Search';

import '../assets/styles/home.scss';
import homeBackground from '../assets/images/home-background.webp';
import { CgPlayButtonO } from 'react-icons/cg';

const Home = () => {
  return (
    <div
      className="home"
      style={{
        background: `url("${homeBackground}")`,
        backgroundSize: 'cover',
      }}
    >
      <div className="search-container">
        <div className="title">
          <span>¡Bienvenido!</span>
        </div>
        <div className="subtitle">
          <CgPlayButtonO className="icon" />
          <span>¿Qué te gustaría ver hoy?</span>{' '}
        </div>
        <Search placeholder="Avengers / Game of thrones" />
      </div>
    </div>
  );
};

export default Home;
