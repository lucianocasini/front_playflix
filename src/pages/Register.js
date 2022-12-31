import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useInput from '../hooks/useInput';
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../utils/userFormsValidator';

import { FaTimesCircle } from 'react-icons/fa';
import '../assets/styles/userForms.scss';
import { userRegister } from '../services/user';

const RegisterForm = () => {
  const [error, setError] = useState('');
  const username = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!validateUsername(username.value))
      return setError('Usuario inválido. Ingrese caracteres alfanuméricos');

    if (!validateEmail(email.value))
      return setError('El email ingresado es inválido');

    if (!validatePassword(password.value))
      return setError(
        'Contraseña inválida. Debe tener entre 6 y 25 caracteres'
      );

    if (!validateConfirmPassword(password.value, confirmPassword.value))
      return setError('Las contraseñas ingresadas no coinciden');

    userRegister(
      username.value,
      email.value,
      password.value,
      confirmPassword.value
    )
      .then(() => navigate('/login?success=1'))
      .catch((err) => {
        const error = err.response.data;
        if (error.errors) {
          setError(error.errors[0].msg);
        } else {
          setError('Ha ocurrido un error');
        }
      });
  };

  return (
    <div className="user-form">
      <div className="title">Crear cuenta</div>
      {error && (
        <div className="error-box">
          <FaTimesCircle /> <span>{error}</span>
        </div>
      )}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre de usuario" {...username} />

          <input type="text" placeholder="Correo electrónico" {...email} />

          <input type="password" placeholder="Contraseña" {...password} />

          <input
            type="password"
            placeholder="Confirme su contraseña"
            {...confirmPassword}
          />

          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
