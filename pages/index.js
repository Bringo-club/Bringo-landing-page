import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SliderSection from "../components/SliderSection/SliderSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About/About";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";

function LandingPage() {

	const navbarRef = useRef();

	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		if (navbarRef.current) {
			setNavbarHeight(navbarRef.current.clientHeight);
		}
	}, [navbarRef]);

	return (
		<>
			<Navbar ref={navbarRef} />
			<SliderSection navbarHeight={navbarHeight} />
			<HowItWorks />
			<About />
			<JoinUs />
			<Footer />
		</>
	);
}

export default LandingPage;
