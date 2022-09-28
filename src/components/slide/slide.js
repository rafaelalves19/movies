import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const ItemCard = ({ data }) => {
	return (
		<div>
			<p>{data?.title}</p>
			<img src={data?.cover} />
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
				<SwiperSlide>
					{data.map((item, index) => (
						<ItemCard key={index} data={item} />
					))}
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slide
