import Navbar from "../components/Navbar/Navbar";
import SliderSection from "../components/SliderSection/SliderSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About/About";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";

function LandingPage() {

	return (
		<>
			<Navbar/>
			<SliderSection />
			<HowItWorks />
			<About />
			<JoinUs />
			<Footer />
		</>
	);
}

export default LandingPage;
