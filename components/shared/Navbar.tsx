import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="flex justify-around items-center bg-green-900 text-white font-semibold pt-8 pb-8 text-lg">
			<Image
				src="/assets/logo.png"
				alt="Logo"
				width={150}
				height={100}
			/>
			<Link href="/">Home</Link>
			<Link href="/about-us">About Us</Link>
			<Link href="/products">Products</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/contact-us">Contact Us</Link>

			<Link href="/get-quote">
				<Button className="bg-yellow-500 text-black hover:cursor-pointer hover:bg-yellow-700">
					Get a Quote
				</Button>
			</Link>
		</nav>
	);
};

export default Navbar;
