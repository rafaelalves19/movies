import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Poster from "./pages/poster/poster";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="poster/movie/:id"
            element={<Poster category="movie" />}
          />
          <Route path="poster/tv/:id" element={<Poster category="tv" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
