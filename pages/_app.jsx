import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
			 	id="script-1"
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script strategy="lazyOnload" id="script-2">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
					});
				`}
			</Script>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
