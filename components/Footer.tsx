import React from "react";
import Link from "next/link";
import {
	GitHubLogoIcon,
	DiscIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
	return (
		<footer className=" border-t py-10">
			<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-96">
						<h1 className="text-3xl font-bold">Esport Ws</h1>
						<p className="">
						esport news website provides a reliable and authoritative source for news, insights, and analysis on the competitive gaming industry, catering to a diverse audience of enthusiasts and professionals alike.
						</p>
					</div>
					<div className="flex items-center gap-2">
						<Link href='#'><GitHubLogoIcon className="w-5 h-5" /></Link>
						<Link href='#'><LinkedInLogoIcon className="w-5 h-5" /></Link>
						<Link href='#'><DiscordLogoIcon className="w-5 h-5" /></Link>
					</div>
				</div>

				<h1 className="text-sm">
					&copy; 2024 EsportWs.All right reserved
				</h1>
			</div>
		</footer>
	);
}
