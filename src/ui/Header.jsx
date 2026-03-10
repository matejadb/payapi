import MobileNavigation from './MobileNavigation';
import TabletNavigation from './TabletNavigation';

import BackgroundCircle from '/assets/shared/desktop/bg-pattern-circle.svg';

function Header() {
	return (
		<header className="">
			<MobileNavigation />
			<TabletNavigation />

			<img
				src={BackgroundCircle}
				role="presentation"
				alt=""
				className="absolute -top-200 left-1/2 -translate-x-1/2 translate-y-1/3  min-h-195 min-w-195 pointer-events-none"
			/>
		</header>
	);
}

export default Header;
