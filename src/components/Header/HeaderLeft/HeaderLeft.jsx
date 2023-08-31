import React, { useState } from "react";

import "./header_left.css";

import HamburgerIcon from "/src/assets/images/icon-menu.svg";
import CloseIcon from "/src/assets/images/icon-close.svg";
import SneakersLogo from "/src/assets/images/logo.svg";

import NavToggleButton from "/src/components/Header/NavToggleButton/NavToggleButton.jsx";

const HeaderLeft = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

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

  const openNavButton = {
    id: "hamburger-btn",
    imgIcon: HamburgerIcon,
    imgId: "icon-hamburger",
    imgAlt: "hamburger menu bars",
  };

  const closeNavButton = {
    id: "close-btn",
    imgIcon: CloseIcon,
    imgId: "icon-close",
    imgAlt: "close menu x-shape",
  };

  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="header-left">
      <NavToggleButton buttonData={openNavButton} toggleMenu={toggleMenu} />
      <div id="nav-container" aria-hidden="true">
        {/* 
        props:
        nav id,

        */}
        <NavToggleButton buttonData={closeNavButton} toggleMenu={toggleMenu} />
        <nav id="header-nav">
          <ul id="nav-menu" aria-labelledby="hamburger-btn">
            {navItems.map((navItem, index) => {
              return (
                <a key={index} className="nav-menu-item" href="#">
                  {navItem}
                </a>
              );
            })}
          </ul>
        </nav>
      </div>
      <img src={SneakersLogo} alt="sneakers-logo"></img>
    </div>
  );
};

export default HeaderLeft;
