import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

import Card from '../card/card'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Hero() {
	return (
		<div className='hero__slide'>
			<Swiper spaceBetween={0} centeredSlides={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className='mySwiper'>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
				<SwiperSlide>
					<Card />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
