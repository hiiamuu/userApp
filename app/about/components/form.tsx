"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "@schemas/form";
import { useRouter } from "next/navigation";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";

const SampleForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		mode: "onTouched",
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof FormSchema>) {
        console.log(values);
        form.reset();
	}
	return (
		<>
			<Form {...form}>
				<form className="grid w-full" onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-5">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter your name" {...field} />
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
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Enter your email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea placeholder="Enter your message" className="resize-none" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5">
						<Button className="rounded-full" onClick={() => router.back()} size="lg" type="button" variant="ghost">
							Back
						</Button>
						<Button className="rounded-full" size="lg" type="submit" variant="default">
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
};

export default SampleForm;
