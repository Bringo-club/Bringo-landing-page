import Navbar from "../components/Navbar/Navbar";
import SliderSection from "../components/SliderSection/SliderSection";
import { useRef, useEffect, useState } from "react";

function LandingPage() {

	const navbarRef = useRef();

	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		if (navbarRef.current) {
			// console.log(navbarRef.current.clientHeight);
			setNavbarHeight(navbarRef.current.clientHeight);
		}
	}, [navbarRef]);

	return (
		<>
			<Navbar ref={navbarRef} />
			<SliderSection navbarHeight={navbarHeight} />
		</>
	);
}

export default LandingPage;
