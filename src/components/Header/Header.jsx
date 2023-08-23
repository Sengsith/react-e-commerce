import React, { useState } from "react";

import "./header.css";

import CustomCart from "../CustomIcons/CustomCart.jsx";

const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    // Toggle isMenuExpanded
    setIsMenuExpanded((prevIsMenuExpanded) => !prevIsMenuExpanded);
  };

  return (
    <header className="primary-header">
      <div className="header-left">
        <nav>
          <button
            id="hamburger-btn"
            onClick={toggleMenu}
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Menu"
            aria-controls="nav-menu"
          >
            <img
              id="icon-hamburger"
              src="./src/assets/images/icon-menu.svg"
              alt="hamburger-menu-icon"
            />
          </button>
          {isMenuExpanded && (
            <ul id="nav-menu" aria-labelledby="hamburger">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </ul>
          )}
        </nav>
        <img src="./src/assets/images/logo.svg" alt="sneakers-logo"></img>
      </div>
      <div className="header-right">
        <CustomCart fill="#69707D" />
        <img
          id="avatar"
          src="./src/assets/images/image-avatar.png"
          alt="avatar-headshot"
        ></img>
      </div>
    </header>
  );
};

export default Header;
