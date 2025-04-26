import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-green-900 p-20 flex justify-center gap-40">
			<div>
				<Image
					src="/assets/logo.png"
					alt="Logo"
					width={250}
					height={100}
				/>
				<p className="text-white font-bold">
					Welcome to the World of Global TradeWave
				</p>
			</div>
			<div className="flex flex-col gap-3">
				<h2 className="text-white font-bold text-2xl">Explore</h2>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					About
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Gallery
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Blog
				</p>
				<p
					className="text-green-300 hover:text-white
					hover:cursor-pointer font-semibold text-lg">
					Products
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Contact
				</p>
			</div>
			<div className="flex flex-col gap-3">
				<h2 className="text-white font-bold text-2xl">Prodcuts</h2>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Onions
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Potatoes
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Rice
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Wheat
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg">
					Millets
				</p>
			</div>
			<div className="flex flex-col gap-3">
				<h2 className="text-white font-bold text-2xl">Contact</h2>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg flex gap-3 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
						/>
					</svg>
					+91 - 8808253244
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg flex items-center gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>
					info@globaltradewave.com
				</p>
				<p className="text-green-300 hover:text-white hover:cursor-pointer font-semibold text-lg flex items-center gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
						/>
					</svg>
					Ayodhya, UP, India
				</p>
			</div>
		</footer>
	);
};

export default Footer;
