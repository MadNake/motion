import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Heading = () => {
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
				Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Motion</span>
			</h1>
			<h3 className="font-medium text-base sm:text-xl md:text-2xl">
				Motion is the connected workspace where <br />
				better, faster work happens.
			</h3>
			<Button>
				Get Motion free
				<ArrowRight className="h-4 w-4 ml-2" />
			</Button>
		</div>
	)
}