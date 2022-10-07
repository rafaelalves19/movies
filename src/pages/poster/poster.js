import Grid from "../../components/grid/grid";

function Poster(/* {data} */) {
  return (
    <div className="poster">
      <div className="poster__imgContainer">
        <img src="/images/2.jpg" alt="movie" />
      </div>
      <Grid>
        <div className="poster__details">
          <a href="#" className="poster__trailer">
            Trailer
          </a>
          <p className="poster__classification">IMDB 8.4/10</p>
        </div>
      </Grid>
    </div>
  );
}

export default Poster;
