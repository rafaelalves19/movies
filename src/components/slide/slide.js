import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const ItemCard = ({ data }) => {
	return (
		<div className='slide__card'>
			<div className='slide__cardHover'>
				<h3>{data.title}</h3>
				<div>
					<p>2022</p>
					<p>1h 50m</p>
				</div>
			</div>
			<img src={data.cover} />
		</div>
	)
}

function Slide({ data }) {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination]}
				className='mySwiper'>
				{data.map((item, index) => (
					<SwiperSlide>
						<ItemCard key={index} data={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Slide
