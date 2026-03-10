import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
	return (
		<div className="flex flex-col pt-10 px-6 min-h-screen overflow-x-hidden relative">
			<Header />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default AppLayout;
