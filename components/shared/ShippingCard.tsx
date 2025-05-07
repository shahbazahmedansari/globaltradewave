import Image from 'next/image';
import React from 'react';

interface ShippingCardProps {
	srcUrl: string;
	alt: string;
	textContent: string;
	bgColor: string;
	textColor: string;
	className: string;
}

const ShippingCard = ({
	srcUrl,
	alt,
	textContent,
	bgColor,
	textColor,
	className,
}: ShippingCardProps) => {
	return (
		<div
			className={`border-2 p-10 m-5 rounded-lg flex flex-col items-center w-[200px] ${bgColor} ${textColor} ${className} hover:border-amber-400 hover:cursor-pointer`}>
			<Image
				src={srcUrl}
				alt={alt}
				width={80}
				height={80}
				className=""
			/>
			<p className="mt-2 font-extrabold">{textContent}</p>
		</div>
	);
};

export default ShippingCard;
