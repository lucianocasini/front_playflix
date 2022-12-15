import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "../store/user";
import { useSelector, useDispatch } from "react-redux";

import { FaAt, FaSignOutAlt } from "react-icons/fa";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    axios
      .get("/api/user/logout")
      .then(() => {
        dispatch(logoutUser());
        setShowDropdown(false);
        navigate("/");
      })
      .catch(() => alert("Ha ocurrido un error. Intente nuevamente"));
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
        <div className="username" onClick={toggleDropdown}>
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
