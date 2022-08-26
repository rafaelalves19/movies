import { Routes, Route } from "react-router-dom";

import Hero from "../hero/hero";

import Header from "../header/header";
import About from "../../pages/about/about";
import Movies from "../../pages/movies/movies";
import Series from "../../pages/series/series";

import "./container.css";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Hero />
    </div>
  );
}
