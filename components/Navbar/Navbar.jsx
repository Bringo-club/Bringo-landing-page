import Link from 'next/link';
// import BringoLogo from '../../assets/bringo.svg';
import LeftArrow from '../../assets/leftArrow.svg';
import styles from "./Navbar.module.scss";
import Image from 'next/image';

function Navbar() {
	return (
		<div className="container">
			<div className={`row ${styles.navbar}`}>
				<a href="/#" className={`w-fit-content ${styles.logo}`}>
					{/* <BringoLogo className={styles.logo} /> */}
					<Image
						src="/imgs/bringo.svg"
						alt=""
						width={146}
						height={56}
						/>
				</a>
				<div className={`w-fit-content ${styles.links}`}>
					<Link href="/#">
						<span className="lg-show">
							About
						</span>
					</Link>
					<Link href="/#">
						<button className='main-btn'>
							Join us <LeftArrow />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;