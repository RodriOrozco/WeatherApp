import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Henry - Weather App
      </span>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
