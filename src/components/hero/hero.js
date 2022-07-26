import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Card from "../card/card";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4f35f23d89519dfc54aa247e4881df87`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        /*  setIsLoading(false); */
      });
  }, []);

  return (
    <div className="hero__slide">
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        centeredSlides={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {movies &&
          movies.map((movie, key) => (
            <SwiperSlide key={key}>
              <Card movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
