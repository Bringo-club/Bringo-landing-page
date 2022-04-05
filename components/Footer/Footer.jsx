import styles from './Footer.module.scss';
import Instagram from "../../assets/instagram.svg";

function Footer(props) {
	return (
		<div className={`${styles.footerContainer} ${props.class && props.class}`}>
			<h4>Contact us</h4>
			<a href="https://www.instagram.com/bringo.club/" target="_blank" rel="noreferrer">
				<Instagram />
			</a>
		</div>
	);
}

export default Footer;