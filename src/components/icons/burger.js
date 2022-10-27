import React from "react";

const Burger = (props) => {
  return (
    <div className="burgerIcon">
      <input
        onChange={() => props.handleIsMenuOpen(!props.isMenuOpen)}
        className="checkbox"
        type="checkbox"
        name=""
        id=""
      />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
  );
};

export default Burger;
