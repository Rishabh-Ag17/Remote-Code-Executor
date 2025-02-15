import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <button>Java</button>
      <button>Dracula</button>
      <button>Tab Size: 4</button>
      <button>Font Size: 17</button>
      <button className="run-button">&#9654;</button>
    </div>
  );
};

export default Header;
