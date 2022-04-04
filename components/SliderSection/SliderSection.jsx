import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function SliderSection() {
	return (
		<>
			<Swiper
				// spaceBetween={50}
				slidesPerView={1}
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide className='carousel-one'></SwiperSlide>
					<SwiperSlide className='carousel-two'></SwiperSlide>
					<SwiperSlide className='carousel-three'></SwiperSlide>
					<SwiperSlide className='carousel-four'></SwiperSlide>
				{/* ... */}
			</Swiper>
		</>
	);
};

export default SliderSection;