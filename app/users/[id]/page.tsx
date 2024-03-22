"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import React, { useState, useEffect } from "react";

type userProps = {
	params: {
		id: number;
	};
};

const Userpage = ({ params }: userProps) => {
	const [user, setUser] = useState<User>({} as User);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				const userData = await res.json();
				setUser(userData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchUser();
	}, [params?.id]);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mx-auto max-w-md">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl font-bold text-green-500">User Profile Details</CardTitle>
					</CardHeader>
					<CardContent className="p-4">
						{user ? (
							<>
								<h2 className="text-lg font-semibold text-blue-600">
									Name: <span className="font-normal text-gray-800">{user.name}</span>
								</h2>
								<h2 className="text-lg font-semibold text-blue-600">
									Email: <span className="font-normal text-gray-800">{user.email}</span>
								</h2>
								<h2 className="text-lg font-semibold text-blue-600">
									Website: <span className="font-normal text-gray-800">{user.website}</span>
								</h2>
							</>
						) : (
							<p className="text-lg font-semibold">Loading...</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Userpage;
