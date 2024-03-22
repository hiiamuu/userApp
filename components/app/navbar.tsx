"use client";
import Link from "next/link";
import { logo } from "@assets";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const Navbar = () => {
	return (
		<>
			<nav className="sticky top-0 z-10 flex h-8 w-full items-center justify-between bg-secondary p-8 text-secondary-foreground">
				<div className="flex items-center">
					<Link href="/">
						<Image src={logo} alt={"logo"}  />
					</Link>
				</div>
				<NavigationMenu className="flex items-center ">
					<NavigationMenuList className="flex items-center justify-end gap-6 ">
						<NavigationMenuItem className="m-3 font-medium hover:text-tertiary">
							<Link href="/" className="">{`Home`}</Link>
						</NavigationMenuItem>
						<NavigationMenuItem className="m-3 font-medium hover:text-tertiary">
							<Link href="/about" className="">{`About`}</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</>
	);
};

export default Navbar;
