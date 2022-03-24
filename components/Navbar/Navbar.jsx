import BringoLogo from '../../assets/bringo.svg';
import ToogleMenu from '../../assets/ToogleMenu.svg';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-white">
			<div className='container'>
				<a href="/" className="navbar-brand">
					<BringoLogo />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span>
						<ToogleMenu />
					</span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto text-center">
						<li className="nav-item px-1 py-1">
							<a
								className="nav-link home-about-link"
								href="#how-it-works"
							>
								Home
							</a>
						</li>
						<li className="nav-item ml-lg-5 px-1 py-1">
							<a className="nav-link home-about-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item sing-in ml-lg-5 mr-lg-3 px-1 py-1">
							<a className="nav-link" href="/joinus">
								Join us
							</a>
						</li>
					</ul>
				</div>

			</div>
		</nav>
	);
}

export default Navbar;
