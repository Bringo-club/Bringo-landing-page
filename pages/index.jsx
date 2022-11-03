import Navbar from "../components/Navbar/Navbar";
import SliderSection from "../components/SliderSection/SliderSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About/About";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";
import Head from 'next/head'

function LandingPage() {

	return (
		<>
			<Head>
				<title>Bringo</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Bringo lets you make new friends, and do activities together. Starting Soon at UM6P Benguerir" />
			</Head>
			<Navbar/>
			<SliderSection />
			<HowItWorks />
			<About />
			{/* <JoinUs /> */}
			<Footer />
		</>
	);
}

export default LandingPage;
