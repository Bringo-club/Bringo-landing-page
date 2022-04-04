import Link from 'next/link';
import BringoLogo from '../../assets/bringo.svg';
import LeftArrow from '../../assets/leftArrow.svg';
import styles from "./Navbar.module.scss";

function Navbar() {
	return (
		<div className="container">
			<div className={`row ${styles.navbar}`}>
				<a href="/#" className="w-fit-content">
					<BringoLogo />
				</a>
				<div className={`w-fit-content ${styles.links}`}>
					<Link href="/#" className="nav-link">
						About
					</Link>
					<Link href="/#" className="nav-link">
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