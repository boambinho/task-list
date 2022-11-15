//create header component
import React from "react";
//create header component
const Header = ({ title, color }) => (
  <header>
    <font color={color}>
      <h1 className="header">{title}</h1>;
    </font>
  </header>
);

export default Header;
