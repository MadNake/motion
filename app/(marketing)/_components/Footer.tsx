import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Footer = () => {
	return (
		<div className="flex items-center w-full justify-between p-6">
			<div>
				<Logo />
			</div>
			<div className="flex justify-between w-full md:justify-end gap-x-2 flex-1 text-muted-foreground">
				<Button size="sm" variant="ghost">
					Privacy Policy
				</Button>
				<Button size="sm" variant="ghost">
					Terms & Conditions
				</Button>
			</div>
		</div>
	);
};
