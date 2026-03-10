import { NavLink } from 'react-router';
import PhoneMockup from '/assets/home/desktop/illustration-phone-mockup.svg';

function Home() {
	return (
		<div className="flex flex-col items-center justify-center ">
			<img src={PhoneMockup} alt="" className="" />

			<div className="flex flex-col gap-4">
				<h1 className="font-display font-normal text-[32px] leading-tight tracking-[-0.25px] text-center text-slate-700">
					Start building with our APIs for absolutely free.
				</h1>

				<form className="flex flex-col gap-4">
					<input
						className="px-7.5 rounded-full bg-slate-50"
						type="email"
						required
						placeholder="Enter email address"
					/>
					<button type="submit">Schedule a Demo</button>
					<p>
						Have any questions? <NavLink to="/contact-us">Contact Us</NavLink>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Home;
