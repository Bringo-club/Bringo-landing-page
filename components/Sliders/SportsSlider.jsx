

function SportsSlider(props) {
  return (
	<div className="swiper-container">
		<div className="section-animate-typing">
			<div className="container text-center muli-bold">
				<p>Let's&nbsp;
					<span className="animate-typing"
					data-animate-loop="true"
					data-type-speed="200"
					data-type-delay="150"
					data-remove-speed="50"
					data-remove-delay="500"
					data-cursor-speed="700">
					Run|Play Chess|Paint|eat pizza|learn how to dance|go for a walk|go for a hike|watch a movie|do yoga|study math|watch the sunset|play tennis
					</span>
				</p>
			</div>
		</div>
		<div className="section-center">
			<div className="container text-center">
				<a href="/joinus"><button className="btn btn-primary px-3 py-3 join-btn">Join Bringo</button></a>
			</div>
		</div>
		<div className="swiper-wrapper">
			<div className="swiper-slide carousel-one">
			</div>

			<div className="swiper-slide carousel-two">
			</div>

			<div className="swiper-slide carousel-three">
			</div>
			<div className="swiper-slide carousel-four">
			</div>
		</div>
		<div className="swiper-pagination"></div>
	</div>
  )
};

export default SportsSlider;