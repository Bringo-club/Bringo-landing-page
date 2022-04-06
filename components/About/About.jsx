import styles from "./About.module.scss";

function About() {
	return (
		<div className={`container ${styles.aboutContainer}`} id="about">
			<h4 className="header">about</h4>
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div className={styles.values}>
						<h5>Values</h5>
						<p>We believe that a life filled with real-life experiences with friends and other people is a rich life.</p>
						<p>We believe that having a healthy support system around us is an infinitely valuable thing, having people who can help us celebrate our victories and learn from our losses.</p>
						<p>We believe that when people gather, they make great stuff happen, whether creating a business, a charity or just helping each other grow.</p>
						<p>So our mission is to help you meet awsome people and expand your social circle.</p>
					</div>
					<div className={styles.story}>
						<h5>Vision</h5>
						<p>Our goal is to make it easy for individuals to form meaningful connections in real life.</p>
						<p>We want to be able to use technology to enhance our social life instead of destroying it.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;