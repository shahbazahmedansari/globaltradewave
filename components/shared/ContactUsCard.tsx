import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const ContactUsCard = () => {
	return (
		<section className="bg-black w-full py-5 px-30 flex justify-center items-center text-white">
			<Image
				src="/assets/icons/icon-1.png"
				alt="Wheat-icon"
				width={120}
				height={120}
			/>
			<h1 className="font-bold text-3xl mx-3 ">
				WE&apos;RE POPULAR LEADER IN AGRI IMPORTS AND EXPORTS CONNECTING
				WORLDWIDE
			</h1>
			<Link href="/contact-us">
				<Button className="bg-white rounded-full text-black p-5 hover:cursor-pointer hover:bg-yellow-500 font-bold">
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
		</section>
	);
};

export default ContactUsCard;
