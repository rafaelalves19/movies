import React from "react";

const Burger = (props) => {
  return (
    <div className="burgerIcon">
      <input
        onChange={() => props.handleIsMenuOpen(!props.isMenuOpen)}
        class="checkbox"
        type="checkbox"
        name=""
        id=""
      />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
  );
};

export default Burger;
