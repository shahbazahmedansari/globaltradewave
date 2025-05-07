import Image from 'next/image';
import React from 'react';
import { FloatingDock } from '../ui/floating-dock';

const Footer = () => {
	const items = [
		{
			title: 'Facebook',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512">
					<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
				</svg>
			),
			href: '',
		},
		{
			title: 'Twitter',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512">
					<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
				</svg>
			),
			href: '',
		},
		{
			title: 'Instagram',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512">
					<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
				</svg>
			),
			href: '',
		},
	];
	return (
		<footer className="bg-green-900 px-20 pt-10 md:flex-row flex-col">
			<div className="flex justify-center gap-16 flex-col md:gap-40 md:flex-row">
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
			</div>
			<div className="bg-green-950 p-5 rounded-md text-green-300 mt-5 flex items-center justify-between">
				<p>
					&copy; Copyright 2025 by{' '}
					<strong>Global Agro TradeWave Pvt Ltd.</strong>
				</p>
				<div>
					<FloatingDock
						items={items}
						desktopClassName="bg-green-800 text-green-950"
						mobileClassName="bg-green-800 text-green-950"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
