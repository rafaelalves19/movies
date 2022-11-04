import Container from "../../components/container/container";
import Grid from "../../components/grid/grid";

export default function About() {
  return (
    <div className="about">
      <Container>
        <Grid>
          <section className="about__project">
            <h1>About the project</h1>
            <p>
              This work aimed to improve my programming skills, using React JS
              and Sass. <br></br>Full responsive website.
              <br />
              <br />
              You can see the code in my {""}
              <a target="blank" href="https://github.com/rafaelalves19/movies">
                repository
              </a>
              .
            </p>
          </section>
          <section className="about__me">
            <h1>About me</h1>
            <p>
              My name is Rafael and I'm a front-end developer. <br />
              I'm learning and improving my developer skills. <br />
              <br /> You can see my profile{" "}
              <a
                target="blank"
                href="https://www.linkedin.com/in/rafaelalves19/"
              >
                here
              </a>
              .
            </p>
          </section>
        </Grid>
      </Container>
    </div>
  );
}
