"use client";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { SignInButton } from "@clerk/clerk-react";

import { useState } from "react";

type ButtonSize = "sm" | "default";
type ButtonVariant = "ghost" | "default";

interface SignInButtonProps {
	text: string;
	buttonSize?: ButtonSize;
	buttonVariant?: ButtonVariant;
	children?: React.ReactNode;
}

export const LoginButton = ({
	text,
	buttonSize = "default",
	buttonVariant = "default",
	children,
}: SignInButtonProps) => {
	// const isMobile = useMediaQuery("(max-width: 768px)");
	const [preventDefault, setPreventDefault] = useState(true);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const onClosePopover = () => {
		setPreventDefault(false);
		setIsPopoverOpen(false);
	};

	return (
		<Popover onOpenChange={() => setIsPopoverOpen(true)} open={isPopoverOpen}>
			<PopoverTrigger>
				<SignInButton mode="modal">
					<Button size={buttonSize} variant={buttonVariant}>
						{text}
						{children}
					</Button>
				</SignInButton>
			</PopoverTrigger>
			<PopoverContent
				forceMount
				onInteractOutside={(e) => {
					if (preventDefault === true) {
						e.preventDefault();
					}
				}}
				onCloseAutoFocus={() => setPreventDefault(true)}
				collisionPadding={20}
				align="center"
				sideOffset={200}
			>
				<div className="flex items-center justify-center flex-col">
					<p>
						You can use the username and password &quot;test-motion&quot; for
						the test
					</p>
					<Button onClick={onClosePopover} size="sm">
						Close
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};
