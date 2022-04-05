import styles from './About.module.scss';

function About() {
	return (
		<div className={`container ${styles.aboutContainer}`} id="about">
			<h4 className='header'>about</h4>
			<div className={styles.story}>
				<h5>story</h5>
				<p>Surprisingly we've got this idea during a hackathon in 2021, we were trying to make meeting new friends a smooth thing. we lost the hackathon and throw that idea into the closest trash bin ( as 99.92 of hackathons ideas )</p>
				<p>After that a lot of people were asking us about it, eventually, they convinced us to build it.</p>
				<p>and that's how Bringo was started.</p>
			</div>
			<div className={styles.values}>
				<h5>values</h5>
				<p>Surprisingly we've got this idea during a hackathon in 2021, we were trying to make meeting new friends a smooth thing. we lost the hackathon and throw that idea into the closest trash bin ( as 99.92 of hackathons ideas )</p>
				<p>After that a lot of people were asking us about it, eventually, they convinced us to build it.</p>
				<p>and that's how Bringo was started.</p>
			</div>
		</div>
	);
}

export default About;