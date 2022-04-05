import Link from 'next/link';
import LeftArrow from '../../assets/leftArrow.svg';
import styles from "./Navbar.module.scss";
import Image from 'next/image';

function Navbar() {
	return (
		<div className="container">
			<div className={`row ${styles.navbar} ${styles.logo}`}>
				<Link href="/" className={`w-fit-content`} passHref>
					<Image
						src="/imgs/bringo.svg"
						alt=""
						width={146}
						height={56}
						/>
				</Link>
				<div className={`w-fit-content ${styles.links}`}>
					<Link href="#about" passHref>
						<span className="lg-show">
							About
						</span>
					</Link>
					<Link href="#join-us" passHref>
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