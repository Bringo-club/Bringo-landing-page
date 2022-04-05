import Head from 'next/head'
import Thankyou from "../../components/Thankyou/Thankyou";
import Footer from "../../components/Footer/Footer";

function T() {

	return (
		<>
			<Head>
				<title>Thank You For Being Awesome!</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Bringo lets you make new friends, and do activities together. Starting Soon at UM6P Benguerir" />
			</Head>
			<Thankyou />
			<Footer class="bottom" />
		</>
	);
}

export default T;
