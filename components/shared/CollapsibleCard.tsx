import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from '@radix-ui/react-collapsible';
import React from 'react';

interface CollapsibleCardProps {
	title: string;
	content: string;
	className?: string;
}

const CollapsibleCard = ({
	title,
	content,
	className,
}: CollapsibleCardProps) => {
	return (
		<div
			className={`${className} border-l-yellow-500 border-l-8 p-10 m-3 w-full bg-white rounded-lg`}>
			<Collapsible>
				<CollapsibleTrigger className="hover:cursor-pointer font-bold text-xl hover:transition-all">
					{title}
				</CollapsibleTrigger>
				<CollapsibleContent className="hover:cursor-pointer mt-4 hover:transition-all">
					{content}
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default CollapsibleCard;
