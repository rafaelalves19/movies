import { useState } from "react";
import { Link } from "react-router-dom";

import Burger from "../../icons/burger";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = (bool) => {
    setIsMenuOpen(bool);
  };

  return (
    <>
      <nav>
        <div className="nav__burgerContainer">
          <div className={isMenuOpen ? "menu-close-icon" : ""}>
            <Burger
              isMenuOpen={isMenuOpen}
              handleIsMenuOpen={handleIsMenuOpen}
            />
          </div>
        </div>
        <ul className={isMenuOpen ? "menu-open" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
