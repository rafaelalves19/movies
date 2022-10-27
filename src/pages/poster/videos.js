import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/539681/videos?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.results);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {videos &&
          videos.map((video) => (
            <SwiperSlide>
              <h3> {video.name}</h3>
              <ReactPlayer
                width="100%"
                controls
                url={`https://www.youtube.com/watch?v=${video.key}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Videos;
