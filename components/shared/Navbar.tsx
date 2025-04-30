import Link from 'next/link';
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
			<Link
				href="/"
				className="hover:text-yellow-400">
				Home
			</Link>
			<Link
				href="/about-us"
				className="hover:text-yellow-400">
				About Us
			</Link>
			<Link
				href="/products"
				className="hover:text-yellow-400">
				Products
			</Link>
			<Link
				href="/blog"
				className="hover:text-yellow-400">
				Blog
			</Link>
			<Link
				href="/contact-us"
				className="hover:text-yellow-400">
				Contact Us
			</Link>

			<Link href="/get-quote">
				<Button className="bg-yellow-500 text-black hover:cursor-pointer hover:bg-white font-bold text-md p-5">
					Get a Quote
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
		</nav>
	);
};

export default Navbar;
