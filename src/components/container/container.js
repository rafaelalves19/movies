import { Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Movies from "../../pages/movies/movies";
import Series from "../../pages/series/series";

import "./container.css";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
