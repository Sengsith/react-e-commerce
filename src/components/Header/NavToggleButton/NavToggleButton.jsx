import React from "react";

import "./nav_toggle_button.css";

const NavToggleButton = ({ buttonData, toggleMenu }) => {
  return (
    <button
      id={buttonData.id}
      onClick={toggleMenu}
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Menu"
      aria-controls="nav-menu"
    >
      <img
        id={buttonData.imgId}
        src={buttonData.imgIcon}
        alt={buttonData.imgAlt}
      />
    </button>
  );
};

export default NavToggleButton;