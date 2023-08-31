import React from "react";

import "./nav_menu.css";

const NavMenu = ({ navId, navItems, isCollapsable }) => {
  return (
    <nav id={navId} aria-labelledby={isCollapsable ? "hamburger-btn" : null}>
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <a key={index} className="nav-menu-item" href="#">
              {navItem}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
