import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState, useEffect } from "react";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/616820/videos?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {videos &&
          videos.map((video) => (
            <SwiperSlide>
              <h2>Trailer</h2>
              <p>asda</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Videos;
