import { NavLink } from 'react-router';
import Logo from '/assets/shared/desktop/logo.svg';
import BurgerMenu from '/assets/shared/mobile/menu.svg';

function Header() {
	return (
		<nav>
			{/* <img src={Logo} alt="" />

			<img src={BurgerMenu} alt="" /> */}

			<ul className="flex">
				<li>
					<NavLink to="Home">
						<span>Home</span>
					</NavLink>
				</li>

				<li>
					<NavLink to="pricing">
						<span>Pricing</span>
					</NavLink>
				</li>

				<li>
					<NavLink to="about-us">
						<span>Home</span>
					</NavLink>
				</li>

				<li>
					<NavLink to="contact-us">
						<span>Contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
