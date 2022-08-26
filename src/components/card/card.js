import React from "react";

import "./card.css";

export default function Card() {
  return (
    <div className="card__moviesSlider">
      <picture>
        <img src="/images/exemplo1.JPG" alt="foto"></img>
      </picture>
      <picture className="card__moviePicture">
        <img
          className="card__movieImage"
          src="/images/exemplo4.JPG"
          alt="img"
        ></img>
      </picture>
      <div className="card__info">
        <h1>O burro sou eu!</h1>
        <ul className="card__genres">
          <li>Terror</li>
          <li>Científico</li>
          <li>Romance</li>
          <li>Comédia</li>
          
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar mi sed quam ullamcorper rutrum. Vivamus tempus erat ut ipsum dictum, in aliquam turpis cursus. Duis justo lectus, elementum at sollicitudin eget, maximus sit amet enim. Donec sed libero justo. In enim sapien, blandit eu vulputate sed, viverra vitae orci. Nulla tellus lacus,  posuere nec neque vel, interdum consequat sem.Duis justo lectus, elementum at sollicitudin eget, maximus sit amet enim. Donec sed libero justo. In enim sapien, blandit eu vulputate sed, viverra vitae orci. Nulla tellus lacus,  posuere nec neque vel, interdum consequat sem.</p>
      </div>
    </div>
  );
}
