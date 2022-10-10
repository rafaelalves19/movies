import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import /* Autoplay */ 'swiper'
import Card from '../card/card'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Hero({ movies }) {
	return (
		<div className='hero__slide'>
			<Swiper
				/* autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }} */
				spaceBetween={0}
				centeredSlides={true}
				modules={
					[
						/* Autoplay */
					]
				}
				className='mySwiper'>
				{movies.map(movie => (
					<SwiperSlide>
						<Card movie={movie}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
