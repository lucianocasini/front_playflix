import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/responsiveMenu.scss';
import { userLogout } from '../services/user';
import { logoutUser } from '../store/user';
import Search from './Search';

const ResponsiveMenu = ({ setShowResponsiveMenu, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setShowResponsiveMenu(false);
  };

  const handleLogout = () => {
    userLogout()
      .then(() => {
        dispatch(logoutUser());
        navigate('/');
      })
      .catch(() => alert('Ha ocurrido un error. Intente nuevamente'));
  };

  return (
    <div className="responsive-menu">
      <div className="btn-close" onClick={handleClose}>
        <IoMdClose className="icon-close" />
      </div>
      <div className="menu">
        <Search onSearch={() => setShowResponsiveMenu(false)} />
        <ul>
          <li>
            <Link to="/" onClick={() => setShowResponsiveMenu(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/movie" onClick={() => setShowResponsiveMenu(false)}>
              Películas
            </Link>
          </li>
          <li>
            <Link to="/tv-show" onClick={() => setShowResponsiveMenu(false)}>
              Series
            </Link>
          </li>
          {user.id ? (
            <>
              <li>
                <Link
                  to="/my-favorites"
                  onClick={() => setShowResponsiveMenu(false)}
                >
                  Mis favoritos
                </Link>
              </li>
              <li
                onClick={() => {
                  handleLogout();
                  setShowResponsiveMenu(false);
                }}
              >
                Cerrar sesión
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setShowResponsiveMenu(false)}>
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={() => setShowResponsiveMenu(false)}
                >
                  Registrarme
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
