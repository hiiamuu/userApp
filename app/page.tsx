import Link from "next/link";

async function getData() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return await res.json();
	} catch (error) {
		console.error(error);
	}
}

export default async function Home() {
	const users = await getData();
	return (
		<>
			<div className="container mx-auto">
				<h1 className="m-4 text-xl font-bold text-green-500 md:text-3xl">List of users details</h1>
				<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{users.map((item: User) => (
						<div key={item?.id} className="my-2 rounded-lg border bg-gray-100 p-4 hover:bg-gray-200">
							<h2 className="font-bold text-blue-600">
								Name:{" "}
								<Link className="font-normal text-gray-800 hover:underline" href={`/users/${item?.id}`}>
									{item?.name}
								</Link>
							</h2>

							<h2 className="font-bold text-blue-600">
								Email: <span className="font-normal text-gray-800">{item?.email}</span>
							</h2>
							<h2 className="font-bold text-blue-600">
								Website:{" "}
								<span className="font-normal text-gray-800">
									<Link className="text-green-500 hover:underline" href={item?.website} passHref>
										{item?.website}
									</Link>
								</span>
							</h2>
							<h2 className="font-bold text-blue-600">
								Phone: <span className="font-normal text-gray-800">{item?.phone}</span>
							</h2>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
