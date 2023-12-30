"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { ModeToggle } from "@/components/mode-togle"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"

export const Navbar = () => {

	const scrollPos = useScroll(10);

	return (
		<div className={cn("flex p-6 fixed top-0 w-full",
			scrollPos && "border-b shadow-sm")}>
			<Logo />
			<div className="flex items-center gap-x-2 justify-between w-full md:justify-end flex-1">
				<Button
					size="sm"
					variant="ghost"
				>
					Log in
				</Button>
				<Button
					size="sm"
				>
					Get Motion free
				</Button>
				<ModeToggle />
			</div>
		</div>
	)
}