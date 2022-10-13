import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Movies from "./pages/movies/movies";
import Series from "./pages/series/series";
import Poster from "./pages/poster/poster";

function App() {
  const API_KEY = "4f35f23d89519dfc54aa247e4881df87";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="about" element={<About />} />
          <Route path="poster" element={<Poster />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
