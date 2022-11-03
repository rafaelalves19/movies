import Popcorn from "../icons/popcorn";
import Grid from "../grid/grid";
import Clapper from "../icons/clapper";
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
          <Clapper />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
        <p>
          Made by <span>Rafael Alves</span>
        </p>
        <div className="footer__linkPages">
          <a href="https://github.com/rafaelalves19">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/rafaelalves19/">
            <Linkedin />
          </a>
        </div>
      </Grid>
    </footer>
  );
}
