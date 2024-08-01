"use client";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect, useState, useTransition } from "react";
import { BlogContentLoading } from "./Skeleton";
import Checkout from "@/components/stripe/Checkout";

export default function Content({ blogId }: { blogId: string }) {
	const [loading, setLoading] = useState(true);

	const [blog, setBlog] = useState<{
		blog_id: string;
		content: string;
		created_at: string;
	} | null>(null);

	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const readBlogContent = async () => {
		const { data, error } = await supabase
			.from("blog_content")
			.select("*")
			.eq("blog_id", blogId);

		if (error) {
			console.error(error);
			setBlog(null);
		} else if (data && data.length > 0) {
			setBlog(data[0]); // Set the first blog in the array
		} else {
			setBlog(null); // Set null if no blogs are found
		}

		setLoading(false);
	};

	useEffect(() => {
		readBlogContent();
	}, [blogId]); // Add blogId as a dependency

	if (loading) {
		return <BlogContentLoading />;
	}

	if (!blog?.content) {
		return <Checkout />;
	}

	return <MarkdownPreview content={blog?.content || ""} />;
}
