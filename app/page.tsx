import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Image from 'next/image';
import ContactUsCard from '@/components/shared/ContactUsCard';
import Card from '@/components/shared/Card';
import ShippingCard from '@/components/shared/ShippingCard';

export default function Home() {
	return (
		<main>
			<section className="flex flex-col items-center justify-center">
				<div className="relative">
					<Image
						src="/assets/images/resources-header.jpg"
						alt="hero-img"
						width={1500}
						height={200}
						className="opacity-80"
					/>
				</div>
				<div className="absolute flex flex-col items-center justify-center">
					<h1 className="text-yellow-500 font-bold text-8xl">
						Global Trade Wave
					</h1>
					<h2 className="text-white font-bold text-7xl mt-5">
						Experts in Global Trade
					</h2>

					<Link href={'/about-us'}>
						<Button className="hover:cursor-pointer mt-10 bg-yellow-500 text-black font-bold text-2xl p-8 w-[250px] rounded-full hover:bg-green-800 hover:text-white">
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
					</Link>
				</div>
			</section>
			<section className="flex m-40">
				<div className="w-[50%]">
					<p className="text-green-900 font-semibold">
						Your trusted partner in International Trade
					</p>
					<h1 className="text-7xl font-bold text-green-900 mt-3">
						Global Tradewave
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={100}
						height={100}
						className="mt-5"
					/>
					<p className="leading-[30px] mt-5 break-normal">
						Global Tradewave is a leading expert in the
						export-import business, known for our extensive
						experience and in-depth understanding of international
						trade. Over the years, we have become a trusted partner
						for companies seeking to expand their global footprint.
						Our unparalleled expertise in navigating complex customs
						regulations, securing favorable trade agreements, and
						optimizing supply chain logistics differentiates us from
						our competitors.
					</p>
					<h3 className="flex mt-3 font-extrabold gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="gold"
							className="size-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
						Empowering Farmers & Building a Sustainable Future
					</h3>
					<h3 className="flex mt-3 font-extrabold gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="gold"
							className="size-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
						Delivering Superior Quality & Setting Industry
						Benchmarks
					</h3>
					<Link href="/about-us">
						<Button className="bg-green-700 rounded-full text-black p-6 hover:cursor-pointer hover:bg-yellow-500 font-bold mt-5">
							About Us
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
					</Link>
				</div>
				<div className="flex w-[50%] mx-10 reltive">
					<div className="absolute right-100 z-[1]">
						<Image
							src="/assets/images/image2-1.jpg"
							alt="Tractor"
							width={300}
							height={200}
							className="rounded-lg"
						/>
					</div>
					<div className="absolute right-20">
						<Image
							src="/assets/images/about-home.jpg"
							alt="Plant"
							width={400}
							height={800}
							className="rounded-lg"
						/>
					</div>
				</div>
			</section>
			<section className="bg-amber-50 flex flex-col justify-center items-center p-10">
				<p className="text-green-900 font-semibold">What We Do?</p>
				<h1 className="text-7xl font-bold text-green-900 mt-3 text-center">
					Global TradeWave is dedicated to importing and exporting the
					finest products across the globe.
				</h1>
				<Image
					src="/assets/icons/leaf.png"
					alt="Leaf"
					width={50}
					height={50}
					className="mt-5"
				/>
				<Card />
			</section>
			<section className="flex justify-center items-center p-14">
				<div>
					<Image
						src=""
						alt="Transport"
						width={200}
						height={200}
					/>
				</div>
				<div>
					<p className="text-green-900 font-semibold">
						Complete Agri Supply Chain
					</p>
					<h1 className="text-7xl font-bold text-green-900 mt-3 text-center">
						Healthy food for your good growth
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-5"
					/>
					<p className='mt-10'>
						Our supply chain begins with meticulous sourcing, where
						we select high-quality raw materials from trusted
						suppliers. This ensures that only the best inputs are
						used, setting a strong foundation for the entire
						process.
					</p>
					<div className="flex items-center">
						<ShippingCard />
						<ShippingCard />
						<ShippingCard />
					</div>
				</div>
			</section>
			<ContactUsCard />
		</main>
	);
}
