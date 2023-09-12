import React from "react";

import "./header.css";

import HeaderLeft from "./HeaderLeft/HeaderLeft.jsx";
import HeaderRight from "./HeaderRight/HeaderRight.jsx";
import Cart from "/src/components/Cart/Cart.jsx";

const Header = () => {
  return (
    <header className="primary-header">
      <HeaderLeft />
      <HeaderRight />
      <Cart />
      <hr id="header-bar"></hr>
    </header>
  );
};

export default Header;
