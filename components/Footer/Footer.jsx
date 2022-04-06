import styles from './Footer.module.scss';
// import Instagram from "../../assets/instagram.svg";

function Footer(props) {
	return (
		<div className={`${styles.footerContainer} ${props.class && props.class}`}>
			<h4>Contact us</h4>
			<a href="https://www.instagram.com/bringo.club/" target="_blank" rel="noreferrer">
				<svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M30.3466 39.4794L8.69133 39.5C3.92718 39.5043 0.0259899 35.6107 0.0205761 30.8466L3.60972e-06 9.19133C-0.00432744 4.42718 3.88928 0.52599 8.65344 0.520576L30.3087 0.500004C35.0728 0.495673 38.974 4.38928 38.9794 9.15344L39 30.8087C39.0054 35.5739 35.1107 39.4751 30.3466 39.4794Z" fill="url(#paint0_radial_245_932)"/>
					<path d="M30.3466 39.4794L8.69133 39.5C3.92718 39.5043 0.0259899 35.6107 0.0205761 30.8466L3.60972e-06 9.19133C-0.00432744 4.42718 3.88928 0.52599 8.65344 0.520576L30.3087 0.500004C35.0728 0.495673 38.974 4.38928 38.9794 9.15344L39 30.8087C39.0054 35.5739 35.1107 39.4751 30.3466 39.4794Z" fill="url(#paint1_radial_245_932)"/>
					<path d="M19.5012 27.5814C15.3228 27.5814 11.9219 24.1816 11.9219 20.0021C11.9219 15.8227 15.3228 12.4229 19.5012 12.4229C23.6796 12.4229 27.0806 15.8227 27.0806 20.0021C27.0806 24.1816 23.6796 27.5814 19.5012 27.5814ZM19.5012 14.5884C16.516 14.5884 14.0874 17.017 14.0874 20.0021C14.0874 22.9873 16.516 25.4159 19.5012 25.4159C22.4864 25.4159 24.9151 22.9873 24.9151 20.0021C24.9151 17.017 22.4864 14.5884 19.5012 14.5884Z" fill="#FFFCFC"/>
					<path d="M27.6222 13.5033C28.5192 13.5033 29.2463 12.7761 29.2463 11.8791C29.2463 10.9821 28.5192 10.2549 27.6222 10.2549C26.7252 10.2549 25.998 10.9821 25.998 11.8791C25.998 12.7761 26.7252 13.5033 27.6222 13.5033Z" fill="#FFFCFC"/>
					<path d="M25.9972 34.0754H13.0041C8.82575 34.0754 5.4248 30.6756 5.4248 26.4962V13.5031C5.4248 9.32368 8.82575 5.92383 13.0041 5.92383H25.9972C30.1756 5.92383 33.5765 9.32368 33.5765 13.5031V26.4962C33.5765 30.6756 30.1756 34.0754 25.9972 34.0754ZM13.0041 8.08934C10.0189 8.08934 7.59032 10.518 7.59032 13.5031V26.4962C7.59032 29.4813 10.0189 31.9099 13.0041 31.9099H25.9972C28.9824 31.9099 31.411 29.4813 31.411 26.4962V13.5031C31.411 10.518 28.9824 8.08934 25.9972 8.08934H13.0041Z" fill="#FFFCFC"/>
					<defs>
					<radialGradient id="paint0_radial_245_932" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.4982 39.5281) scale(48.6149)">
					<stop stop-color="#FFDD55"/>
					<stop offset="0.328" stop-color="#FF543F"/>
					<stop offset="0.348" stop-color="#FC5245"/>
					<stop offset="0.504" stop-color="#E64771"/>
					<stop offset="0.643" stop-color="#D53E91"/>
					<stop offset="0.761" stop-color="#CC39A4"/>
					<stop offset="0.841" stop-color="#C837AB"/>
					</radialGradient>
					<radialGradient id="paint1_radial_245_932" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.27569 0.0130882) scale(32.2804 21.5084)">
					<stop stop-color="#4168C9"/>
					<stop offset="0.999" stop-color="#4168C9" stop-opacity="0"/>
					</radialGradient>
					</defs>
				</svg>
			</a>
		</div>
	);
}

export default Footer;