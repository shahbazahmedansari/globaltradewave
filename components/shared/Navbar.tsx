import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
	return (
		<nav className="flex justify-around items-center bg-green-900 text-white">
			<Image
				src="/assets/logo.png"
				alt="Logo"
				width={150}
				height={100}
			/>
			<div className="md:flex justify-between gap-20 items-center font-semibold pt-8 pb-8 text-lg hidden">
				<div className="flex gap-20 hover:cursor-pointer">
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
						href="/open-trade-oppurtunities"
						className="hover:text-yellow-400">
						Open Trade Oppurtunities
					</Link>
					<Link
						href="/contact-us"
						className="hover:text-yellow-400">
						Contact Us
					</Link>
				</div>

				<div>
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
				</div>
			</div>

			<div className="md:hidden">
				<Sheet>
					<SheetTrigger className="hover:cursor-pointer text-black bg-yellow-500 p-2 rounded-md">
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</SheetTrigger>
					<SheetContent className="bg-green-900">
						<SheetHeader className="ml-5">
							<Image
								src="/assets/logo.png"
								alt="Logo"
								width={150}
								height={100}
							/>
							<div className="flex flex-col gap-5 mt-5 font-extrabold text-xl text-white">
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
									href="/open-trade-oppurtunities"
									className="hover:text-yellow-400">
									Open Trade Oppurtunities
								</Link>
								<Link
									href="/contact-us"
									className="hover:text-yellow-400">
									Contact Us
								</Link>
							</div>

							<Link href="/get-quote">
								<Button className="bg-yellow-500 text-black hover:cursor-pointer hover:bg-white font-bold text-md p-5 mt-5">
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
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
