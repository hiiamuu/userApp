import React from "react";
import SampleForm from "./components/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Aboutpage = () => {
	return (
		<>
			<main className="conatiner md:m-5 flex justify-center">
				<Card className="w-full md:p-5">
					<CardHeader>
						<CardTitle className="text-green-500">User contact form</CardTitle>
						<CardDescription className="text-grey-200">This is sample form for collecting user data.</CardDescription>
					</CardHeader>
					<CardContent>
						<SampleForm />
					</CardContent>
				</Card>
			</main>
		</>
	);
};

export default Aboutpage;
