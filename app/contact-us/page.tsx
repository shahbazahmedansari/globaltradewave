"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    content: z.string().min(5).max(200),
});

const ContactUs = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            content: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <main>
            <div className="flex flex-col justify-center items-center p-10">
                <p className="text-green-700 text-xl font-semibold">
                    Write a message
                </p>
                <h1 className="text-5xl mt-5 font-extrabold">
                    Let&apos;s Connect.{" "}
                    <span className="text-green-700">Shall we&#63;</span>
                </h1>
                <p className="text-2xl mt-5 font-semibold">
                    We are always here for you. Write to us regarding your
                    concerns and we will get back.
                </p>
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
                    className="space-y-8 mx-10 md:mx-50 my-10"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-xl">
                                    Your Name
                                </FormLabel>
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
                                <FormLabel className="font-bold text-xl">
                                    Your Email
                                </FormLabel>
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
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-xl">
                                    Your Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type your message here"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="bg-green-700 hover:bg-yellow-500 hover:cursor-pointer text-xl p-6"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
};

export default ContactUs;
