import styles from './SliderSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import TypeAnimation from 'react-type-animation';
import "swiper/css/pagination";
import LeftArrow from '../../assets/leftArrow.svg';
import Link from 'next/link';

SwiperCore.use([Autoplay, Pagination]);

const activities = [
	"Let's Run",
	"Let's Play Chess",
	"Let's Paint",
	"Let's eat pizza",
	"Let's lear how to dance",
	"Let's go for a walk",
	"Let's go for a hike",
	"Let's watch a movie",
	"Let's do yoga",
	"Let's study math",
	"Let's watch the sunset",
	"Let's play tennis"
]


const renderedActivities = [];

for (let i = 0; i < activities.length; i++) {
	renderedActivities.push(
		activities[i], 1000);
}


function SliderSection() {
	return (
		<>
			
			<Swiper
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 3000,
					}}
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

								<Link href="#join-us" passHref>
									<div className={styles.btnContainer}>
										<button className='main-btn bringo-btn'>
										Join Bringo <LeftArrow />
										</button>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div
						className={`${styles["section-animate-typing"]}`} >
						<TypeAnimation
							cursor={true}
							sequence={renderedActivities}
							wrapper="p"
							repeat={Infinity}
						/>
					</div>
			</Swiper>
		</>
	);
};

export default SliderSection;