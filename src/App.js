import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import About from "./pages/about/about";
import Movies from "./pages/movies/movies";
import Series from "./pages/series/series";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
