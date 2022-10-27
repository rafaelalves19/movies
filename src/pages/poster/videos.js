import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Videos(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(props);
    fetch(
      `https://api.themoviedb.org/3/${props.category}/${props.id}/videos?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`
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
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {videos &&
          videos.map((video, key) => (
            <SwiperSlide key={key}>
              <h3> {video.name}</h3>
              <ReactPlayer
                width="100%"
                height="unset"
                style={{ aspectRatio: "16/9" }}
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
