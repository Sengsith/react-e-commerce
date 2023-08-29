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
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeBtn = document.querySelector("#close-btn");
    // After user clicks to toggle menu, toggle the current navContainer,hamburgerBtn, and closeBtn aria attirubtes
    hamburgerBtn.setAttribute("aria-expanded", !isMenuExpanded);
    closeBtn.setAttribute("aria-expanded", !isMenuExpanded);
    navContainer.setAttribute("aria-hidden", isMenuExpanded);

    // Toggle menu-bg-active and header-nav-active classes
    navContainer.classList.toggle("nav-container-active");
    navMenu.classList.toggle("header-nav-active");

    // Toggle isMenuExpanded last due to asynchrony
    setIsMenuExpanded((prevIsMenuExpanded) => !prevIsMenuExpanded);
  };

  const toggleCart = () => {
    const cartContainer = document.querySelector("#cart-container");
    const cartBtn = document.querySelector("#cart-btn");
    // After user clicks to toggle cart, toggle the current cartContainer aria attirubte
    cartBtn.setAttribute("aria-expanded", !isCartExpanded);
    cartContainer.setAttribute("aria-hidden", isCartExpanded);

    // Toggle cart-active classes
    cartContainer.classList.toggle("cart-container-active");

    // Toggle isCartExpanded last due to asynchrony
    setIsCartExpanded((prevIsCartExpanded) => !prevIsCartExpanded);
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
              id="close-btn"
              onClick={toggleMenu}
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Menu"
              aria-controls="nav-menu"
            >
              <img
                id="icon-hamburger"
                src={CloseIcon}
                alt="hamburger-menu-icon"
              />
            </button>
            <ul id="nav-menu" aria-labelledby="hamburger-btn">
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
        <button
          id="cart-btn"
          onClick={toggleCart}
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Cart"
          aria-controls="cart-container"
        >
          <CustomCart fill={isCartExpanded ? "#000000" : "#69707D"} />
        </button>
        <img
          id="avatar"
          src={Avatar}
          alt="Head shot of a man with frizzy shoulder-length hair. He is wearing sunglasses and a blue crew neck shirt."
        ></img>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
