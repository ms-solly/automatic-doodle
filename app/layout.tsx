import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "../components/nav/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SessisonProvider from "../components/SessisonProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://dailyblog-demo.vercel.app/"),

	title: {
		template: "%s | Esport ws",
		default: "Esport ws",
	},
	authors: {
		name: "chensokheng",
	},

	description:
		"esport news website provides a reliable and authoritative source for news, insights, and analysis on the competitive gaming industry, catering to a diverse audience of enthusiasts and professionals alike.",
	openGraph: {
		title: "Esport Ws",
		description:
			"esport news website provides a reliable and authoritative source for news, insights, and analysis on the competitive gaming industry, catering to a diverse audience of enthusiasts and professionals alike.",
		url: "https://dailyblog-demo.vercel.app/",
		siteName: "Esport Ws",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Esport", "News", "Techniques"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("antialiased dark:bg-[#09090B] ", inter.className)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
				<Toaster />
				<SessisonProvider />
			</body>
		</html>
	);
}
