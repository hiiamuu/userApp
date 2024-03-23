"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { CircleUserRound, Globe, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState, useEffect } from "react";
import Loader from "@components/app/loader";

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
				<Card className="flex flex-col">
					<CardHeader className="flex gap-6">
						<CardTitle className="flex items-center justify-between gap-8 text-2xl font-bold text-green-500">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<p>Profile Details</p>
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col p-4">
						{user ? (
							<>
								<div className="mb-4 flex items-center gap-4">
									<CircleUserRound className="text-orange-600" />
									<h2 className="text-lg font-semibold text-gray-500">{user?.name}</h2>
								</div>
								<div className="mb-4 flex items-center gap-4">
									<Mail className="text-orange-600" />
									<h2 className="text-lg font-semibold text-gray-500">{user?.email}</h2>
								</div>
								<div className="mb-4 flex items-center gap-4">
									<Globe className="text-orange-600" />
									<h2 className="text-lg font-semibold text-gray-500">{user?.website}</h2>
								</div>
								<div className="mb-4 flex items-center gap-4">
									<Phone className="text-orange-600" />
									<h2 className="text-lg font-semibold text-gray-500">{user?.phone}</h2>
								</div>
							</>
						) : (
							<p className="text-lg font-semibold"><Loader/></p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Userpage;
