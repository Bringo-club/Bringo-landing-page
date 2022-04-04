import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './SliderSection.module.scss';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import TypeAnimation from 'react-type-animation';
import "swiper/css/pagination";
import LeftArrow from '../../assets/leftArrow.svg';

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
					<SwiperSlide className={`${styles["carousel-one"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-two"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-three"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-four"]}`}></SwiperSlide>
					
					<div className={`${styles.overlay}`}>
						<div className="container">
							<div className={` ${styles.sliderHeader}`}>
								<h1>We make Meeting new friends easier</h1>
								<p>Create or Join an event. <br />
									We Help You Connect, Grow, Have fun and Make Good memories together.
								</p>
								<a href="/#" className={styles.btnContainer}>
									<button className='main-btn'>
									Join Bringo <LeftArrow />
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						className={`${styles["section-animate-typing"]}`} >
						<TypeAnimation
							cursor={true}
							sequence={[
								"Let's go for a walk",
								1000,
								"Let's Run",
								1000,
								"Let's Play Chess",
								1000,
								"Let's Paint",
								1000,
								"Let's eat pizza",
								1000
								]}
							wrapper="p"
							repeat={Infinity}
						/>
					</div>
			</Swiper>
		</>
	);
};

export default SliderSection;