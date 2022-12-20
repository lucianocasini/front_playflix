import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router';
import useInput from '../hooks/useInput';

import { useDispatch } from 'react-redux';
import { setUser } from '../store/user';

import '../assets/styles/userForms.scss';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

import { userLogin } from '../services/user';

const LoginForm = () => {
  const [error, setError] = useState('');
  const username = useInput();
  const { reset: resetPassword, ...password } = useInput({ reset: true });

  const queryURL = useLocation().search;
  const successRegister = new URLSearchParams(queryURL).get('success');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.value.trim() === '') return setError('Ingrese un usuario');
    if (password.value.trim() === '') return setError('Ingrese una contraseña');

    userLogin(username.value, password.value)
      .then((res) => res.data)
      .then((user) => {
        dispatch(setUser(user));
        navigate('/');
      })
      .catch((err) => {
        setError(err.response.data);
        resetPassword();
      });
  };

  return (
    <div className="user-form">
      <div className="title">Iniciar sesión</div>
      {successRegister && !error && (
        <div className="success-box">
          <FaCheckCircle />{' '}
          <span>Gracias por tu registro. ¡Ya puedes iniciar sesión!</span>
        </div>
      )}
      {error && (
        <div className="error-box">
          <FaTimesCircle /> <span>{error}</span>
        </div>
      )}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre de usuario" {...username} />
          <input type="password" placeholder="Contraseña" {...password} />

          <button type="submit">Acceder</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
