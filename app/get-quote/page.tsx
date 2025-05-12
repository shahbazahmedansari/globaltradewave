'use client';
import Image from 'next/image';
import * as React from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectLabel,
} from '@radix-ui/react-select';

const formSchema = z.object({
	name: z.string().min(3).max(50),
	email: z.string().min(3).max(50),
	dob: z.date({
		required_error: 'A date of birth is required.',
	}),
	num: z.number(),
	spec: z.string().min(3).max(30),
	qty: z.number(),
	paymentTerms: z.string().min(3).max(30),
	destination: z.string().min(3).max(30),
	details: z.string().min(3).max(30),
	packaging: z.string(),
});

const GetQuote = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			dob: new Date(),
			num: 0,
			spec: '',
			qty: 0,
			paymentTerms: '',
			destination: '',
			details: '',
			packaging: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<main>
			<div className="flex flex-col justify-center items-center p-10">
				<p className="text-green-700 text-xl font-semibold">Get a Quote</p>
				<h1 className="text-5xl mt-5 font-extrabold">
					Fill the details below to get a{' '}
					<span className="text-green-700">Quote.</span>
				</h1>

				<Image
					src="/assets/icons/leaf.png"
					alt="Leaf"
					width={50}
					height={50}
					className="mt-4"
				/>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 mx-10 md:mx-50 my-10">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Your Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your name"
										{...field}
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Your Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="dob"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">
									Date of Birth
								</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={'outline'}
												className={cn(
													'w-[240px] pl-3 text-left font-normal',
													!field.value && 'text-muted-foreground',
												)}>
												{field.value ? (
													format(field.value, 'PPP')
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										className="w-auto p-0"
										align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() || date < new Date('1900-01-01')
											}
											initialFocus
											className="bg-green-950 text-white rounded-md"
										/>
									</PopoverContent>
								</Popover>
								<FormDescription>
									Your date of birth is used to calculate your age.
								</FormDescription>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="num"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">No.</FormLabel>
								<FormControl>
									<Input
										placeholder="No."
										{...field}
										type="number"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="spec"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Spec.</FormLabel>
								<FormControl>
									<Input
										placeholder="Spec."
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="qty"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Qty.</FormLabel>
								<FormControl>
									<Input
										placeholder="Qty."
										{...field}
										type="number"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="packaging"
						render={() => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Packaging</FormLabel>
								<Select>
									<FormControl>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="Please choose an option" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Fruits</SelectLabel>
											<SelectItem value="apple">Apple</SelectItem>
											<SelectItem value="banana">Banana</SelectItem>
											<SelectItem value="blueberry">Blueberry</SelectItem>
											<SelectItem value="grapes">Grapes</SelectItem>
											<SelectItem value="pineapple">Pineapple</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="paymentTerms"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">
									Payment Terms
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Payment Terms"
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="destination"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Destination</FormLabel>
								<FormControl>
									<Input
										placeholder="Destination"
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="details"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-bold text-xl">Details</FormLabel>
								<FormControl>
									<Input
										placeholder="Details"
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="bg-green-700 hover:bg-yellow-500 hover:cursor-pointer text-xl p-6">
						Submit
					</Button>
				</form>
			</Form>
		</main>
	);
};

export default GetQuote;
