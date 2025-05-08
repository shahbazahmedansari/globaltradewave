import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Image from 'next/image';
import ContactUsCard from '@/components/shared/ContactUsCard';
import Card from '@/components/shared/Card';
import ShippingCard from '@/components/shared/ShippingCard';
import CollapsibleCard from '@/components/shared/CollapsibleCard';

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
					<h1 className="text-yellow-500 font-bold text-2xl sm:text-4xl md:text-8xl">
						Global Trade Wave
					</h1>
					<h2 className="text-white font-bold text-2xl sm:text-4xl md:text-8xl mt-5">
						Experts in Global Trade
					</h2>

					<Link href={'/about-us'}>
						<Button className="hover:cursor-pointer mt-5 md:mt-10 bg-yellow-500 text-black font-bold text-md md:text-2xl p-5 md:p-8 w-[180px] md:w-[250px] rounded-full hover:bg-green-800 hover:text-white">
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
			<section className="flex md:m-10 m-4 flex-col md:flex-row w-full">
				<div className="md:w-[50%] mx-5">
					<p className="text-green-900 font-semibold">
						Your trusted partner in International Trade
					</p>
					<h1 className="text-3xl md:text-7xl sm:text-5xl font-bold text-green-900 mt-3">
						Global Tradewave
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-5 md:w-[90px] md:h-[40px]"
					/>
					<p className="leading-[30px] mt-5 break-normal w-full">
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
				<div className="flex md:w-[50%] mx-10 relative">
					<div className="absolute right-100 z-[1]">
						<Image
							src="/assets/images/image2-1.jpg"
							alt="Tractor"
							width={300}
							height={200}
							className="rounded-lg hidden md:block"
						/>
					</div>
					<div className="md:absolute right-20">
						<Image
							src="/assets/images/about-home.jpg"
							alt="Plant"
							width={400}
							height={800}
							className="rounded-lg mt-5"
						/>
					</div>
				</div>
			</section>
			<section className="bg-amber-50 flex flex-col justify-center items-center p-10 md:mt-40 mt-10">
				<p className="text-green-900 font-semibold">What We Do?</p>
				<h1 className="text-4xl md:text-7xl font-bold text-green-900 mt-3 text-center">
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
			<section className="flex flex-col md:flex-row justify-center items-center p-14">
				<div className="w-full md:w-[50%] gap-5">
					<Image
						src="/assets/images/about-home.jpg"
						alt="home"
						width={500}
						height={1000}
						className="z-[-1] absolute left-0 mt-[-230px] opacity-50 rounded-lg hidden md:block"
					/>
					<Image
						src="/assets/images/transport.jpg"
						alt="Transport"
						width={1200}
						height={1200}
						className="rounded-lg mt-[-50px]"
					/>
				</div>
				<div className="ml-10 w-full md:w-[50%]">
					<p className="text-green-900 font-semibold text-xl">
						Complete Agri Supply Chain
					</p>
					<h1 className="text-4xl md:text-7xl font-bold text-green-900 mt-3">
						Healthy food for your good growth
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-10"
					/>
					<p className="mt-8 leading-[35px]">
						Our supply chain begins with meticulous sourcing, where
						we select high-quality raw materials from trusted
						suppliers. This ensures that only the best inputs are
						used, setting a strong foundation for the entire
						process.
					</p>
					<div className="flex flex-col md:flex-row items-center mt-10">
						<ShippingCard
							srcUrl="/assets/icons/01-4.png"
							alt="truck-icon"
							bgColor="bg-white"
							textColor="text-black"
							textContent="Shipping"
							className="w-full"
						/>
						<ShippingCard
							srcUrl="/assets/icons/02-3.png"
							alt="plant-icon"
							bgColor="bg-green-700"
							textColor="text-yellow-600"
							textContent="Quality Check"
							className="w-full"
						/>
						<ShippingCard
							srcUrl="/assets/icons/03-2.png"
							alt="hand-icon"
							bgColor="bg-white"
							textColor="text-black"
							textContent="Packing"
							className="w-full"
						/>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center p-14 gap-5 bg-amber-50 flex-col md:flex-row">
				<div className="flex flex-col items-start md:w-[50%] w-full ml-12">
					<p className="text-green-900 font-semibold text-xl">
						Frequently Asked Questions
					</p>
					<h1 className="text-7xl font-bold text-green-900 mt-3">
						How can we help you?
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-10"
					/>
					<div className="mt-10 flex items-center gap-10 flex-col md:flex-row">
						<div className="relative">
							<Image
								src="/assets/images/image-11.jpg"
								alt="Vegetables"
								width={250}
								height={250}
								className="rounded-full hover:scale-110 hover:transition-all"
							/>
							<Image
								src="/assets/icons/icon-3.png"
								alt="Tractor-icon"
								width={80}
								height={80}
								className="absolute right-8 bottom-0 hover:scale-110 hover:transition-all"
							/>
						</div>
						<div>
							<div className="flex items-center gap-4 mt-2">
								<div className="bg-amber-400 w-7 h-7 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="white"
										className="size-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 12.75 6 6 9-13.5"
										/>
									</svg>
								</div>
								<p className="font-semibold text-lg">Export</p>
							</div>
							<div className="flex items-center gap-4 mt-3">
								<div className="bg-amber-400 w-7 h-7 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="white"
										className="size-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 12.75 6 6 9-13.5"
										/>
									</svg>
								</div>
								<p className="font-semibold text-lg">
									Import Agent (for foreign client)
								</p>
							</div>
							<div className="flex items-center gap-4 mt-3">
								<div className="bg-amber-400 w-7 h-7 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="white"
										className="size-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 12.75 6 6 9-13.5"
										/>
									</svg>
								</div>
								<p className="font-semibold text-lg">
									Sourcing Agent
								</p>
							</div>
							<div className="flex items-center gap-4 mt-3">
								<div className="bg-amber-400 w-7 h-7 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="white"
										className="size-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 12.75 6 6 9-13.5"
										/>
									</svg>
								</div>
								<p className="font-semibold text-lg">
									Training & consultancy
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center md:w-[50%] w-full">
					<CollapsibleCard
						title="What types of vegetables does Global Tradewave export?"
						content="Global Tradewave exports a wide variety of vegetables, including onions, broccoli, brinjal, spinach, cabbage, green chilies, and more. Our vegetables are rich in essential nutrients like vitamins, minerals, and dietary fiber."
					/>
					<CollapsibleCard
						title="What are the health benefits of the vegetables exported by Global Tradewave?"
						content="The vegetables exported by Global Tradewave are excellent sources of vitamins, dietary fiber, and folate. Including these vegetables in your diet can help reduce the risk of chronic diseases such as heart disease, type 2 diabetes, stroke, and certain types of cancer."
					/>
					<CollapsibleCard
						title="What fruits does Global Tradewave export?"
						content="Global Tradewave exports a wide range of fruits, including mangoes, bananas, papayas, oranges, apricots, grapes, strawberries, apples, guavas, litchis, and more. These fruits are known for their rich vitamin content and health benefits."
					/>
					<CollapsibleCard
						title="How significant is the export of fruits from India through Global Tradewave?"
						content="The export of fruits from India has been steadily increasing, with around 372,213.73 metric tons exported in the year 2018-2019. Global Tradewave plays a key role in this growth, ensuring the global distribution of high-quality Indian fruits."
					/>
				</div>
			</section>
			<ContactUsCard />
		</main>
	);
}
