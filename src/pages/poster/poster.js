import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";
import Videos from "./videos";
import { useParams } from "react-router-dom";

import "swiper/css/pagination";

const SingleCastCard = ({ cast }) => {
  return (
    <div className="card">
      <img
        className="card__castImg"
        src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
        alt={`${cast.name} foto`}
      />
      <p className="actor">{cast.name}</p>
      <p className="caracter">{cast.character}</p>
    </div>
  );
};

/* const CastNull = () =>{
  return(<>
    aplicar imagem null para actor que não tem foto
  </>)
} */

function Poster(props) {
  const [castCard, setCastCard] = useState([]);
  const [crewInfo, setCrewInfo] = useState([]);
  const [poster, setPoster] = useState([]);
  const crewSlice = crewInfo.slice(0, 8);

  const { id } = useParams();

  const getYear = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.category}/${id}?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setPoster(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.category}/${id}/credits?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastCard(data.cast);
        setCrewInfo(data.crew);
      });
  }, []);

  return (
    <>
      {poster && (
        <div className="poster">
          <div className="poster__imgBackgroung">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster.backdrop_path}`}
              alt="movie"
            />
          </div>

          <Container>
            <div className="poster__details">
              <Grid>
                <div className="poster__imgpicture">
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${poster.poster_path}`}
                    alt="movie"
                  />
                </div>

                <div className="poster__info">
                  <h2>
                    {poster.title}
                    <span> &#40;{getYear(poster.release_date)}&#41;</span>
                  </h2>
                  <p className="poster__average">
                    {/* <-----Circular bar (%) ------>*/}
                    IMDB {poster.vote_average}
                    <span>/10</span>
                  </p>
                  <h3>Overview</h3>
                  <p className="poster__overview">{poster.overview}</p>
                </div>
              </Grid>
            </div>
            <div className="poster_crew">
              <h3>Crew</h3>
              <ul>
                {crewSlice &&
                  crewSlice.map((crew, key) => (
                    <li key={key}>
                      <b>{crew.name}</b>
                      <p>{crew.known_for_department}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="poster__contentWrapper">
              <h3>Cast</h3>
              <section className="poster__castSlider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    400: {
                      slidesPerView: 1,
                    },
                    440: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
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
                  {castCard &&
                    castCard.map((cast, key) => (
                      <SwiperSlide key={key}>
                        <SingleCastCard cast={cast} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </section>
              <section className="poster__videosSlider">
                <Videos category={props.category} id={id} />
              </section>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default Poster;
