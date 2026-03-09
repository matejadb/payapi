import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Navigate replace to="home" />} />
					<Route path="home" element={<Home />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="about-us" element={<About />} />
					<Route path="contact-us" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
