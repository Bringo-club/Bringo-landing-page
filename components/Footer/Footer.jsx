import styles from './Footer.module.scss';
// import Instagram from "../../assets/instagram.svg";

function Footer(props) {
	return (
		<div className={`${styles.footerContainer} ${props.class && props.class}`}>
			<h4>Contact us</h4>
			<a href="https://www.instagram.com/bringo.club/" target="_blank" rel="noreferrer">
			<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M41.2402 52.972L11.8113 53C5.33694 53.0059 0.0353197 47.7146 0.0279624 41.2402L4.90552e-06 11.8113C-0.00588088 5.33694 5.28544 0.0353197 11.7598 0.0279624L41.1887 4.90552e-06C47.6631 -0.00588088 52.9647 5.28544 52.972 11.7598L53 41.1887C53.0073 47.6645 47.7146 52.9662 41.2402 52.972Z" fill="url(#paint0_radial_156_370)"/>
				<path d="M41.2402 52.972L11.8113 53C5.33694 53.0059 0.0353197 47.7146 0.0279624 41.2402L4.90552e-06 11.8113C-0.00588088 5.33694 5.28544 0.0353197 11.7598 0.0279624L41.1887 4.90552e-06C47.6631 -0.00588088 52.9647 5.28544 52.972 11.7598L53 41.1887C53.0073 47.6645 47.7146 52.9662 41.2402 52.972Z" fill="url(#paint1_radial_156_370)"/>
				<path d="M26.5013 36.8024C20.823 36.8024 16.2012 32.182 16.2012 26.5023C16.2012 20.8225 20.823 16.2021 26.5013 16.2021C32.1796 16.2021 36.8014 20.8225 36.8014 26.5023C36.8014 32.182 32.1796 36.8024 26.5013 36.8024ZM26.5013 19.145C22.4445 19.145 19.1441 22.4455 19.1441 26.5023C19.1441 30.559 22.4445 33.8595 26.5013 33.8595C30.5581 33.8595 33.8585 30.559 33.8585 26.5023C33.8585 22.4455 30.5581 19.145 26.5013 19.145Z" fill="#FFFCFC"/>
				<path d="M37.5377 17.6712C38.7567 17.6712 39.7449 16.683 39.7449 15.464C39.7449 14.245 38.7567 13.2568 37.5377 13.2568C36.3187 13.2568 35.3306 14.245 35.3306 15.464C35.3306 16.683 36.3187 17.6712 37.5377 17.6712Z" fill="#FFFCFC"/>
				<path d="M35.3295 45.6287H17.6722C11.9939 45.6287 7.37207 41.0083 7.37207 35.3285V17.6712C7.37207 11.9914 11.9939 7.37109 17.6722 7.37109H35.3295C41.0078 7.37109 45.6296 11.9914 45.6296 17.6712V35.3285C45.6296 41.0083 41.0078 45.6287 35.3295 45.6287ZM17.6722 10.314C13.6154 10.314 10.315 13.6144 10.315 17.6712V35.3285C10.315 39.3853 13.6154 42.6858 17.6722 42.6858H35.3295C39.3863 42.6858 42.6867 39.3853 42.6867 35.3285V17.6712C42.6867 13.6144 39.3863 10.314 35.3295 10.314H17.6722Z" fill="#FFFCFC"/>
				<defs>
				<radialGradient id="paint0_radial_156_370" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.7027 53.0383) scale(66.0664)">
				<stop stop-color="#FFDD55"/>
				<stop offset="0.328" stop-color="#FF543F"/>
				<stop offset="0.348" stop-color="#FC5245"/>
				<stop offset="0.504" stop-color="#E64771"/>
				<stop offset="0.643" stop-color="#D53E91"/>
				<stop offset="0.761" stop-color="#CC39A4"/>
				<stop offset="0.841" stop-color="#C837AB"/>
				</radialGradient>
				<radialGradient id="paint1_radial_156_370" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5285 -0.661701) scale(43.8682 29.2294)">
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