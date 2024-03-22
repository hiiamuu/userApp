import "./globals.css";
import { cn } from "@lib/utils";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@data";
import { Roboto as FontSans } from "next/font/google";
import Navbar from "@components/app/navbar";

const fontSans = FontSans({
	style: ["italic", "normal"],
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	appleWebApp: {
		capable: true,
		title: APP_NAME,
	},
	applicationName: APP_NAME,
	title: APP_NAME,
	description: APP_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased", fontSans.variable)}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
