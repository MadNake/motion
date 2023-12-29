import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { ModeToggle } from "@/components/mode-togle"

export const Navbar = () => {
	return (
		<div className="flex p-6 fixed top-0 border-b shadow-sm w-full">
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