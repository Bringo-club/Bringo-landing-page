import styles from './Footer.module.scss';
import Instagram from "../../assets/instagram.svg";

function Footer() {
	return (
		<div className={styles.footerContainer}>
			<h4>Contact us</h4>
			<Instagram />
		</div>
	);
}

export default Footer;