import Navbar from "../components/Navbar/Navbar";
import HomeLandingJS from "../components/CustomJS/HomeLanding";
import SportsSlider from "../components/Sliders/SportsSlider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About/About";

function LandingPage() {
	return (
		<>
			<Navbar />
			<SportsSlider />
			<HowItWorks />
			<HomeLandingJS />
			<About />	
		</>
	);
};

export default LandingPage;
