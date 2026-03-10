import { useState } from 'react';
import { NavLink } from 'react-router';

import Logo from '/assets/shared/desktop/logo.svg';
import BurgerMenu from '/assets/shared/mobile/menu.svg';
import CloseButton from '/assets/shared/mobile/close.svg';

function MobileNavigation() {
	const [isOpen, setIsOpen] = useState();

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};
	return (
		<nav className="flex items-center justify-between bg-red-500 sm:hidden">
			<img src={Logo} alt="" />

			<button onClick={toggleMenu}>
				<img src={BurgerMenu} alt="Burger menu icon." />
			</button>

			<ul
				className={`${isOpen ? 'flex' : 'hidden'} absolute bg-slate-950 px-8.25 pt-12.25 right-0 top-0 min-h-screen `}>
				<div className="flex flex-col w-full">
					<button onClick={toggleMenu} className="size-5.5 mb-6 self-end">
						<img src={CloseButton} alt="Close menu icon." />
					</button>

					<div className="flex flex-col gap-10 text-center">
						<div className="border-t border-slate-50 opacity-15"></div>

						<div className="flex flex-col gap-7.5">
							<li>
								<NavLink to="pricing">
									<span className="font-public font-bold opacity-70 text[18px] leading-[1.4] text-slate-50">
										Pricing
									</span>
								</NavLink>
							</li>

							<li>
								<NavLink to="about-us">
									<span className="font-public font-bold opacity-70 text[18px] leading-[1.4] text-slate-50">
										About
									</span>
								</NavLink>
							</li>

							<li>
								<NavLink to="contact-us">
									<span className="font-public font-bold opacity-70 text[18px] leading-[1.4] text-slate-50">
										Contact
									</span>
								</NavLink>
							</li>
						</div>

						<button className="rounded-full bg-rose-600 font-public font-bold text-[15px] leading-[1.2] text-neutral-50 px-6 py-4">
							Schedule a Demo
						</button>
					</div>
				</div>
			</ul>
		</nav>
	);
}

export default MobileNavigation;
