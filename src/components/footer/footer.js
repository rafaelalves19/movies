import Popcorn from "../icons/popcorn";
import Grid from "../grid/grid";
import Racket from "../icons/racket";
import { Link } from "react-router-dom";
import Github from "../icons/github";
import Linkedin from "../icons/linkedin";

export default function Footer() {
  return (
    <footer>
      <Grid>
        <div className="footer__Icon1">
          <Popcorn />
        </div>
        <div className="footer__Icon2">
          <Racket />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
        <Github />
        <Linkedin />
      </Grid>
    </footer>
  );
}
