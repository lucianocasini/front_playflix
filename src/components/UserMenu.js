import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from '../store/user';
import { useSelector, useDispatch } from 'react-redux';

import { FaAt, FaSignOutAlt } from 'react-icons/fa';
import { userLogout } from '../services/user';

const UserMenu = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout()
      .then(() => {
        dispatch(logoutUser());
        navigate('/');
      })
      .catch(() => alert('Ha ocurrido un error. Intente nuevamente'));
  };

  if (!user.id) {
    return (
      <div className="user-access">
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/register">Registrarme</Link>
      </div>
    );
  } else {
    return (
      <div className="user">
        <div className="username">
          <FaAt className="icon" />
          <span>{user.username}</span>
        </div>
        <div className="logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" title="Cerrar sesión" />
        </div>
      </div>
    );
  }
};

export default UserMenu;
