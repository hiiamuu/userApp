import React from "react";
import SampleForm from "./components/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Aboutpage = () => {
	return (
		<>
			<main className="conatiner md:m-5 m-2 flex justify-center">
				<Card className="w-full md:p-5">
					<CardHeader>
						<CardTitle>User form</CardTitle>
						<CardDescription>This is sample form for collecting user data.</CardDescription>
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
