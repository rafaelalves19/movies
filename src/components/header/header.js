import React from "react";

import Logo from "./logo/logo";
import Nav from "./nav/nav";

export default function Header() {
  return (
    <header>
      <div className="header__wrappers">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
