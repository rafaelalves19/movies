import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";

const CastCard = () => {
  return (
    <div className="card">
      <img src="" alt="cast" />
      <p className="actor">Norman Reddus</p>
      <p className="caracter">Daryl Dixon</p>
    </div>
  );
};

function Poster() {
  const [poster, setPoster] = useState([]);

  /* useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${}?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`)
			.then(response => response.json())
			.then(data => {
				setPoster(data.results)
			})
	}, []) */

  return (
    <div className="poster">
      <div className="poster__imgContainer">
        <img src="/images/2.jpg" alt="movie" />
      </div>

      <Container>
        <div className="poster__details">
          <Grid>
            <img src="/images/2.jpg" alt="movie" />
            <div className="poster__title">
              <h2>
                Homem de Ferro<span>2010</span>
              </h2>
            </div>
            <p className="poster__classification">IMDB 8.4/10</p>
            <h3>Sinopse</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              inventore repellat, eligendi blanditiis nulla optio non illo, hic
              doloribus dignissimos quam soluta officia, harum distinctio! Ea
              sequi id vel neque!
            </p>
            <h3 className="poster__director"></h3>
          </Grid>
        </div>

        <div className="poster__contentWrapper">
          
        </div>
      </Container>
    </div>
  );
}

export default Poster;
