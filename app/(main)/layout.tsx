"use client";
import { useConvexAuth } from "convex/react";
import { Sidebar } from "./_components/Sidebar";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-full">
				<Spinner size="lg" />
			</div>
		);
	}

	if (!isAuthenticated) {
		redirect("/");
	}

	return (
		<div className="flex h-full dark:bg-[#1F1F1F]">
			<Sidebar />
			<main className="h-full flex-1 overflow-y-auto">
				<SearchCommand />
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
