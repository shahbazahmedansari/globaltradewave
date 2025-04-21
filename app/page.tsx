import { Button } from '@/components/ui/button';

import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<div className="relative">
					<Image
						src="/assets/images/resources-header.jpg"
						alt="hero-img"
						width={1500}
						height={200}
						className="opacity-70"
					/>
				</div>
				<div className="absolute flex flex-col items-center justify-center">
					<h1 className="text-yellow-500 font-bold text-8xl">
						Global Trade Wave
					</h1>
					<h2 className="text-white font-bold text-7xl mt-5">
						Experts in Global Trade
					</h2>
					<Button className="hover:cursor-pointer mt-10 bg-yellow-500 text-black font-bold text-3xl p-10 w-sm rounded-full hover:bg-green-800 hover:text-white">
						Know About Us
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
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</svg>
					</Button>
				</div>
			</section>
		</>
	);
}
