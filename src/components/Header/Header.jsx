import React, { useState } from "react";

import "./header.css";

import HamburgerIcon from "/src/assets/images/icon-menu.svg";
import CloseIcon from "/src/assets/images/icon-close.svg";
import SneakersLogo from "/src/assets/images/logo.svg";
import Avatar from "/src/assets/images/image-avatar.png";

import CustomCart from "/src/components/CustomIcons/CustomCart.jsx";

const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    const navMenu = document.querySelector("#header-nav");
    const menuBg = document.querySelector("#menu-bg");

    // Toggle isMenuExpanded
    setIsMenuExpanded((prevIsMenuExpanded) => !prevIsMenuExpanded);

    // Also want to toggle menu-bg-active and header-nav-active
    navMenu.classList.toggle("header-nav-active");
    menuBg.classList.toggle("menu-bg-active");
  };

  return (
    <header className="primary-header">
      <div className="header-left">
        <div id="menu-bg"></div>
        <nav id="header-nav">
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
              src={isMenuExpanded ? CloseIcon : HamburgerIcon}
              alt="hamburger-menu-icon"
            />
          </button>
          {isMenuExpanded && (
            <ul id="nav-menu" aria-labelledby="hamburger">
              <a className="nav-menu-item" href="#">
                Collections
              </a>
              <a className="nav-menu-item" href="#">
                Men
              </a>
              <a className="nav-menu-item" href="#">
                Women
              </a>
              <a className="nav-menu-item" href="#">
                About
              </a>
              <a className="nav-menu-item" href="#">
                Contact
              </a>
            </ul>
          )}
        </nav>
        <img src={SneakersLogo} alt="sneakers-logo"></img>
      </div>
      <div className="header-right">
        <CustomCart fill="#69707D" />
        <img id="avatar" src={Avatar} alt="avatar-headshot"></img>
      </div>
    </header>
  );
};

export default Header;
