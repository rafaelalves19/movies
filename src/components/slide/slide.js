import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const handleClick = (event) => {
  console.log(event.currentTarget.id);
};

const ItemCard = ({ latest, category }) => {
  const getYear = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  return (
    <Link to={`poster/${category}/${latest.id}`} id={latest.id}>
      <div className="slide__card">
        <div className="slide__cardHover">
          <h3>{latest.name || latest.title}</h3>

          <div className="slide__cardHidden">
            <p>
              {getYear(latest.release_date) || getYear(latest.first_air_date)}
            </p>

            <p className="slide__avarege">
              IMDB {latest.vote_average}
              <span>/10</span>
            </p>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/${latest.poster_path}`}
          alt="movie"
        />
      </div>
    </Link>
  );
};

function Slide({ endpoint, category }) {
  const [latests, setlatests] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setlatests(data.results);
        /* setIsLoading(false); */
      });
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {latests &&
          latests.map((latest, key) => (
            <SwiperSlide key={key}>
              <ItemCard category={category} latest={latest} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Slide;
