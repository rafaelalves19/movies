import { Link } from "react-router-dom";

import Burger from "../../icons/burger";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="nav__burgerContainer">
          <Burger />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
