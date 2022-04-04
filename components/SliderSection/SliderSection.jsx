import styles from './SliderSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import TypeAnimation from 'react-type-animation';
import "swiper/css/pagination";
import LeftArrow from '../../assets/leftArrow.svg';

SwiperCore.use([Autoplay, Pagination]);

function SliderSection() {
	return (
		<>
			
			<Swiper
					slidesPerView={1}
					// style={{ height: `800px`}}
					// style={{ height: `480px`}}
					loop={true}
					// autoplay={{
					// 	delay: 3000,
					// }}
					speed={1000}
					modules={[Pagination]}
					pagination={{
						clickable: true,
					}}
					className={styles.slider}
				>
					<SwiperSlide className={`${styles["carousel-one"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-two"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-three"]}`}></SwiperSlide>
					<SwiperSlide className={`${styles["carousel-four"]}`}></SwiperSlide>
					
					<div className={`${styles.overlay}`}>
						<div className="container">
							<div className={`${styles.sliderHeader}`}>
								<h1>we make meeting new friends easier</h1>
								
								<p className="lg-show">Create or Join an event. <br />
									We Help You Connect, Grow, Have fun and Make Good memories together.
								</p>

								<p className="sm-show">Create or Join an event. Connect, <br />
									Learn, Grow, Have fun & make <br /> Good memories together.</p>

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