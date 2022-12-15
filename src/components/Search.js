import React from "react";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";

import "../assets/styles/search.scss";
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
  const { reset, ...search } = useInput({ reset: true });
  const navigate = useNavigate();
  const placeholder = props.placeholder
    ? props.placeholder
    : "Ingrese su búsqueda...";

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.value.trim().length < 3)
      return alert("Ingrese al menos 3 caracteres para buscar");

    navigate(`/search?query=${search.value}`);
    reset();
  };
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder={placeholder} {...search} />
        <button type="submit">
          <FaSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
