import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="primary-header">
      <nav>
        <button
          id="hamburger"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Menu"
          aria-controls="nav-menu"
        >
          <img
            id="hamburger-icon"
            src="./src/assets/images/icon-menu.svg"
            alt="hamburger-menu-icon"
          ></img>
        </button>
        <ul id="nav-menu" aria-labelledby="hamburger">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
      </nav>
      <img src="./src/assets/images/logo.svg" alt="sneakers"></img>
      <img src="./src/assets/images/icon-cart.svg" alt="cart"></img>
      <img src="./src/assets/images/image-avatar.png"></img>
    </header>
  );
};

export default Header;

// TODO: Lookup later: https://www.w3.org/WAI/ARIA/apg/
