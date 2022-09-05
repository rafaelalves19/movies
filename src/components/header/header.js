import React from "react";

import Container from "../container/container";
import Logo from "./logo/logo";
import Nav from "./nav/nav";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="header__sideWrappers">
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
