import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
	return (
		<Link href="/products">
			<div className="bg-amber-100 border-amber-400 border-2 flex flex-col justify-center items-center p-5 mt-4 rounded-xl w-full md:w-xl hover:cursor-pointer hover:scale-105 hover:transition-all">
				<Image
					src="/assets/images/agricomm.jpg"
					alt="Agricultural"
					width={300}
					height={300}
					className="rounded-full"
				/>
				<h1 className="mt-2 font-bold md:text-3xl text-xl">
					Agricultural Commodities
				</h1>
				<p className="text-center mt-2 font-medium text-xl">
					I was impresed by the agrion services, not lorem ipsum is simply free
					text.
				</p>
			</div>
		</Link>
	);
};

export default Card;
