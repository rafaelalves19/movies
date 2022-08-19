import React from "react";

import Logo from "./logo/logo";
import Nav from "./nav/nav";

import "./header.css";

export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}
