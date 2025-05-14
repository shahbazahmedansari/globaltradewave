import React from 'react';
import ContactUsCard from '@/components/shared/ContactUsCard';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
	return (
		<main>
			<section className="m-10 flex flex-col md:flex-row justify-center items-center">
				<div className="w-full md:w-[50%] flex justify-center items-center gap-6">
					<div className="flex flex-col gap-6">
						<Image
							src="/assets/images/image-17.jpg"
							alt="Farmer"
							width={250}
							height={250}
							className="max-sm:w-[300px] max-sm:h-[300px] rounded-md"
						/>
						<Image
							src="/assets/images/image2-11.jpg"
							alt="Farm"
							width={250}
							height={250}
							className="hidden sm:block rounded-md"
						/>
					</div>
					<Image
						src="/assets/images/image3-11.jpg"
						alt="Farmer"
						width={250}
						height={500}
						className="hidden sm:block rounded-md"
					/>
				</div>
				<div className="w-full md:w-[50%] mt-5 ml-8">
					<p className="text-green-900 font-semibold">About Us</p>
					<h1 className="text-green-900 font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
						Global Trade Wave
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-4"
					/>
					<p className="leading-[30px] mt-5 break-normal text-lg w-full">
						Global Tradewave is a leading expert in the export-import industry,
						providing unmatched expertise in international trade. We specialize
						in navigating customs regulations, securing favorable trade
						agreements, and optimizing supply chain logistics. Our customized
						solutions help clients expand globally and manage trade risks
						effectively. With years of experience, Global Tradewave is the
						trusted partner for businesses aiming to excel in the global
						marketplace.
					</p>
				</div>
			</section>
			<section className="flex flex-col md:flex-row justify-center items-center gap-10 mx-10">
				<div className="w-full md:w-[50%] m-20">
					<p className="text-green-900 font-semibold">Healthy Products</p>
					<h1 className="text-3xl md:text-7xl sm:text-5xl font-bold text-green-900 mt-3">
						How We Work
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={20}
						height={20}
						className="mt-5 md:w-[55px] md:h-[25px]"
					/>
					<p className="leading-[30px] mt-5 break-normal w-full">
						As a sourcing agent here is all the task, which we manage to fulfill
						requirements of our buyers and deliver their order according their
						needs in given timeline.
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
						We find manufacturer as per buyer requirement.
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
						We negotiate and fix deal in suitable price range.
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
						We arrange transportation and handle full consignment.
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
						If buyer have supplier and manufacturer then we also provide
						shipment or transportation service.
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
						We can source products from multiple suppliers.
					</h3>
					<Link href="/contact-us">
						<Button className="bg-green-700 rounded-full text-black p-6 hover:cursor-pointer hover:bg-yellow-500 font-bold mt-5">
							Contact Us
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
				<div className="w-full md:w-[50%] max-sm:hidden">
					<Image
						src="/assets/images/image-3.png"
						alt="Logo2"
						width={500}
						height={500}
					/>
				</div>
			</section>
			<section className="flex flex-col md:flex-row justify-center items-center w-full">
				<div className="w-full md:w-[50%] flex justify-center items-center">
					<img
						src="/assets/images/farmer1.jpg"
						alt="Farmer-1"
						className="w-full"
					/>
				</div>
				<div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
					<p className="text-green-300 font-semibold">Our Values</p>
					<h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
						Integrity
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-4"
					/>
					<p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
						Upholding the highest ethical standards in every interaction,
						transaction, and relationship. We prioritize transparency, honesty,
						and accountability in all our endeavors, fostering trust and
						reliability within the industry.
					</p>
					<h2 className="text-white font-bold md:text-4xl text-xl mt-5">
						AGRO EXPORTS
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={80}
							className="text-white"
						/>
						<p className="text-white font-bold md:text-3xl text-xl">80%</p>
					</div>
					<h2 className="text-white font-bold md:text-4xl text-xl mt-5">
						NON-AGRO EXPORTS
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={20}
							className="text-white"
						/>
						<p className="text-white font-bold md:text-3xl text-xl">20%</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col md:flex-row justify-center items-center w-full">
				<div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
					<p className="text-green-300 font-semibold">Our Values</p>
					<h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
						Empowerment
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-4"
					/>
					<p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
						Our commitment to ethical sourcing goes beyond business. Through
						various initiatives, we empower farmers by providing fair prices,
						imparting agricultural knowledge, and ensuring a dignified
						livelihood. We believe in building a strong foundation for a
						sustainable future.
					</p>
					<h2 className="text-white font-bold md:text-4xl text-xl mt-5">
						FARMING SOCIETIES HELPED
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={100}
							className="text-white"
						/>
						<p className="text-white font-bold md:text-3xl text-xl">50+</p>
					</div>
					<h2 className="text-white font-bold md:text-4xl text-xl mt-5">
						INR SUPPORT TO FARMERS
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={100}
							className="text-white"
						/>
						<p className="text-white font-bold md:text-3xl text-xl">500K+</p>
					</div>
				</div>
				<div className="w-full md:w-[50%] flex justify-center items-center">
					<img
						src="/assets/images/farmer2.jpg"
						alt="Farmer-2"
						className="w-full h-[510px]"
					/>
				</div>
			</section>
			<section className="flex flex-col md:flex-row justify-center items-center w-full">
				<div className="w-full md:w-[50%] flex justify-center items-center">
					<img
						src="/assets/images/farmer3.jpg"
						alt="Farmer-3"
						className="w-full h-[510px]"
					/>
				</div>
				<div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
					<p className="text-green-300 font-semibold">Our Values</p>
					<h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
						Excellence
					</h1>
					<Image
						src="/assets/icons/leaf.png"
						alt="Leaf"
						width={50}
						height={50}
						className="mt-4"
					/>
					<p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
						Striving for excellence in all facets of our operations, from
						sourcing premium agricultural products to delivering exceptional
						service. At Global TradeWave, we continuously refine our processes
						to exceed expectations and set industry benchmarks for quality and
						service.
					</p>
					<h2 className="text-white font-bold text-xl md:text-4xl mt-5">
						HAPPY IMPORTERS
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={100}
							className="text-white"
						/>
						<p className="text-white font-bold text-xl md:text-3xl">20+</p>
					</div>
					<h2 className="text-white font-bold md:text-4xl text-xl mt-5">
						COMPLAINTS RECIEVED
					</h2>
					<div className="flex justify-center items-center gap-5">
						<Progress
							value={0}
							className="text-white"
						/>
						<p className="text-white font-bold md:text-3xl text-xl">0%</p>
					</div>
				</div>
			</section>

			<ContactUsCard />
		</main>
	);
};

export default AboutUs;
