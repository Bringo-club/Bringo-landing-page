import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './SliderSection.module.scss';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

function SliderSection(props) {
	// console.log(props.navbarHeight);
	return (
		<>
			<Swiper
					slidesPerView={1}
					style={{ height: `calc(100vh - ${props.navbarHeight}px)`}}
					loop={true}
					autoplay={{
						delay: 3000,
					}}
					speed={1000}
					modules={[Pagination]}
					pagination={{
						clickable: true,
					}}
				>
					{/* <div>
						<h1>We make Meeting new friends easier</h1>
					</div> */}
					<SwiperSlide className={`${styles["carousel-one"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-two"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-three"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-four"]}`}></SwiperSlide>
			</Swiper>
		</>
	);
};

export default SliderSection;