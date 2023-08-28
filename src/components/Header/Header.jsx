import React, { useState } from "react";

import "./header.css";

import HamburgerIcon from "/src/assets/images/icon-menu.svg";
import CloseIcon from "/src/assets/images/icon-close.svg";
import SneakersLogo from "/src/assets/images/logo.svg";
import Avatar from "/src/assets/images/image-avatar.png";

import CustomCart from "/src/components/CustomIcons/CustomCart.jsx";
import Cart from "/src/components/Cart/Cart.jsx";

const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isCartExpanded, setIsCartExpanded] = useState(false);

  const toggleMenu = () => {
    const navContainer = document.querySelector("#nav-container");
    const navMenu = document.querySelector("#header-nav");

    // After user clicks to toggle menu, toggle the current navContainer aria-hidden attirubte
    navContainer.setAttribute("aria-hidden", isMenuExpanded);

    // Toggle isMenuExpanded
    setIsMenuExpanded((prevIsMenuExpanded) => !prevIsMenuExpanded);

    // Toggle menu-bg-active and header-nav-active
    navContainer.classList.toggle("nav-container-active");
    navMenu.classList.toggle("header-nav-active");
  };

  return (
    <header className="primary-header">
      <div className="header-left">
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
            src={HamburgerIcon}
            alt="hamburger-menu-icon"
          />
        </button>
        <div id="nav-container" aria-hidden="true">
          <nav id="header-nav">
            <button
              id="hamburger-btn"
              onClick={toggleMenu}
              aria-haspopup="true"
              aria-expanded="true"
              aria-label="Menu"
              aria-controls="nav-menu"
            >
              <img
                id="icon-hamburger"
                src={CloseIcon}
                alt="hamburger-menu-icon"
              />
            </button>
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
          </nav>
        </div>
        <img src={SneakersLogo} alt="sneakers-logo"></img>
      </div>
      <div className="header-right">
        <CustomCart fill="#69707D" />
        {/* TODO: Cart becomes black on expanded*/}
        <img id="avatar" src={Avatar} alt="avatar-headshot"></img>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
