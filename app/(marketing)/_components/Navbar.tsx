"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { ModeToggle } from "@/components/mode-togle"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import Link from "next/link"
import { Spinner } from "@/components/spinner";

export const Navbar = () => {

	const scrollPos = useScroll(10);
	const { isLoading, isAuthenticated } = useConvexAuth();

	return (
		<div className={cn("flex p-6 fixed top-0 w-full",
			scrollPos && "border-b shadow-sm")}>
			<Logo />
			<div className="flex items-center gap-x-2 justify-between w-full md:justify-end flex-1">

				{isLoading && (
					<Spinner />
				)}

				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode="modal">
							<Button
								size="sm"
								variant="ghost"
							>
								Log in
							</Button>
						</SignInButton>
						<SignInButton mode="modal">
							<Button
								size="sm"
							>
								Get Motion free
							</Button>
						</SignInButton>
					</>
				)}

				{isAuthenticated && !isLoading && (
					<>
						<Button
							size="sm"
							variant="ghost"
							asChild
						>
							<Link href="/documents">
								Enter Motion
							</Link>
						</Button>
						<UserButton
							afterSignOutUrl="/"
						/>
					</>
				)}

				<ModeToggle />
			</div>
		</div>
	)
}