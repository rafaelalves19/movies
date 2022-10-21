import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";

const CastCard = ({ cast }) => {
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

function Poster() {
  const [castCard, setCastCard] = useState([]);
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/616820/credits?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastCard(data.cast);
      });
  }, []);


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/616820?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setPoster(data.results);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="poster">
        {poster &&
          poster.map((post) => (
            <div className="poster__imgContainer">
              <img
                src={`https://image.tmdb.org/t/p/original/${post.backdrop_path}`}
                alt="movie"
              />
            </div>
          ))}

        <Container>
          <div className="poster__details">
            <Grid>
              {/* <img
                src={`https://image.tmdb.org/t/p/w400/${post.poster_path}`}
                alt="movie"
              /> */}
              <div className="poster__title">
                {/* <h2>
                  {post.title}
                  <span>2010</span>
                </h2> */}
              </div>
              <p className="poster__classification">IMDB 8.4/10</p>
              <h3>Sinopse</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                inventore repellat, eligendi blanditiis nulla optio non illo,
                hic doloribus dignissimos quam soluta officia, harum distinctio!
                Ea sequi id vel neque!
              </p>
              <h3 className="poster__director"></h3>
            </Grid>
          </div>

          <div className="poster__contentWrapper">
            <section className="poster__castSlider">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
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
                className="mySwiper"
              >
                {castCard &&
                  castCard.map((cast) => (
                    <SwiperSlide>
                      <CastCard cast={cast} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Poster;
