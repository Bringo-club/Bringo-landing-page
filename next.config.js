/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	nextConfig,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	images: {
		loader: "akamai",
		path: "",
	},
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/thankyou": { page: "/thankyou" }
		};
	}
};
