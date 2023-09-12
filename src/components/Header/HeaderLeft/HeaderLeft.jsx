import React, { useState } from "react";

import "./header_left.css";

import HamburgerIcon from "/src/assets/images/icon-menu.svg";
import CloseIcon from "/src/assets/images/icon-close.svg";
import SneakersLogo from "/src/assets/images/logo.svg";

import NavToggleButton from "/src/components/Header/NavToggleButton/NavToggleButton.jsx";
import NavMenu from "/src/components/NavMenu/NavMenu.jsx";

const HeaderLeft = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    const navContainer = document.querySelector("#nav-container");
    const navMenu = document.querySelector("#header-nav-menu");
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

  // Object prop to pass into NavToggleButton to open menu
  const openNavButton = {
    id: "hamburger-btn",
    imgIcon: HamburgerIcon,
    imgId: "icon-hamburger",
    imgAlt: "hamburger menu bars",
  };

  // Object prop to pass into NavToggleButton to close menu
  const closeNavButton = {
    id: "close-btn",
    imgIcon: CloseIcon,
    imgId: "icon-close",
    imgAlt: "close menu x-shape",
  };

  // Array prop to pass into NavMenu for anchor tags
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="header-left">
      <NavToggleButton buttonData={openNavButton} toggleMenu={toggleMenu} />
      <img
        src={SneakersLogo}
        alt="The logo for the company with the woord 'sneakers' in black font color."
      ></img>
      <div id="nav-container" aria-hidden="true">
        <NavToggleButton buttonData={closeNavButton} toggleMenu={toggleMenu} />
        <NavMenu
          navId="header-nav-menu"
          navItems={navItems}
          isCollapsable={true}
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
