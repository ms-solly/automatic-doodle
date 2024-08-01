import React, { useEffect } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useUser } from "@/lib/store/user";
import { Button } from "@/components/ui/button";
import { DashboardIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

export default function Profile() {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const user = useUser((state) => state.user);
	const setUser = useUser((state) => state.setUser);

	useEffect(() => {
		const fetchUserData = async () => {
			const { data: userData, error } = await supabase.auth.getUser();
			if (error) {
				console.error("Error fetching user data:", error);
			} else {
				setUser(userData.user);
				console.log(userData.user);

			}
		};
		fetchUserData();
	}, [supabase, setUser]);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setUser(null);
	};

	return (
		<Popover>
			<PopoverTrigger>
				<Image
					src={user?.image_url || "/default-image.webp"}
					alt={user?.display_name || "User"}
					width={50}
					height={50}
					className="rounded-full ring-2 ring-green-500"
				/>
			</PopoverTrigger>
			<PopoverContent className="space-y-3 divide-y p-2" side="bottom">
				<div className="px-4">
					<p className="text-sm">{user?.display_name || "Name not available"}</p>
					<p className="text-sm text-gray-500">{user?.email || "Email not available"}</p>
				</div>
				
				<Link href="/dashboard">
					<Button
						variant="ghost"
						className="w-full flex justify-between items-center"
					>
						Dashboard <DashboardIcon />
					</Button>
				</Link>
				
				<Button
					variant="ghost"
					className="w-full flex justify-between items-center"
					onClick={handleLogout}
				>
					Log out <LockOpen1Icon />
				</Button>
			</PopoverContent>
		</Popover>
	);
}
