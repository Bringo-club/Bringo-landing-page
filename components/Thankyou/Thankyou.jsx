import styles from './Thankyou.module.scss';
import RightArrow from "../../assets/rightArrow.svg";
import Link from 'next/link'

function Thankyou() {
	return (
		<div className={`container ${styles.thankyouContainer}`}>
			<div className={styles.yas5}>
				<div className={styles.All}>
					<svg className={styles.svgWrapper}>
						<path d="M196.6,27.6C179.1,18.3,159.2,13,138,13C69,13,13,69,13,138s56,125,125,125s125-56,125-125 c0-8.5-0.9-16.8-2.5-24.9" className={styles.circleGray}></path>
						<path d="M196.6,27.6C179.1,18.3,159.2,13,138,13C69,13,13,69,13,138s56,125,125,125s125-56,125-125 c0-8.5-0.9-16.8-2.5-24.9" className={styles.circleLightBlue}></path>
						<path d="M196.6,27.6C179.1,18.3,159.2,13,138,13C69,13,13,69,13,138s56,125,125,125s125-56,125-125 c0-8.5-0.9-16.8-2.5-24.9" className={styles.circleDarkBlue}></path>
						<polyline points="72.5,123.5 131.5,179.5 284.5,18.5" className={styles["tick-gray"]}></polyline>
						<polyline points="72.5,123.5 131.5,179.5 284.5,18.5" className={styles["tick-B"]}></polyline>
						<polyline points="72.5,123.5 131.5,179.5 284.5,18.5" className={styles.tickC}></polyline>
					</svg>
				</div>
			</div>
			<h3 className={styles.header}>thank you for being awesome!</h3>
			{/* <div> */}
				<Link href="/" passHref>
					<button className={`main-btn ${styles.btn}`}>
						<RightArrow />
						Go Back Home
					</button>
				</Link>
			{/* </div> */}
			<p className={styles.para}>We will email you once bringo is launched</p>
		</div>
	);
}

export default Thankyou;