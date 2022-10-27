import Container from "../../components/container/container";
import Hero from "../../components/hero/hero";
import Slide from "../../components/slide/slide";
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <h1 className="slide__title">Movies</h1>
        <Slide
          category="movie"
          endpoint="https://api.themoviedb.org/3/movie/now_playing?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US&page=1"
        />
        <h1 className="slide__title">Series</h1>
        <Slide
          category="tv"
          endpoint="https://api.themoviedb.org/3/tv/popular?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US&page=1"
        />
      </Container>
    </>
  );
}
