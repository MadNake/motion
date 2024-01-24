"use client"

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import Image from "next/image";

import { useUser } from "@clerk/clerk-react";

const DocumentsPage = () => {

	const { user } = useUser();

	return (
		<div className="relative flex items-center justify-center h-full flex-col space-y-4">
			<Image
				src="/empty.png"
				alt="Emty"
				height={300}
				width={300}
				className="object-contain block dark:hidden"
			/>
			<Image
				src="/empty-dark.png"
				alt="Emty"
				height={300}
				width={300}
				className="object-contain hidden dark:block"
			/>
			<h2
				className="text-lg font-medium">
				Welcom to {user?.firstName}&apos;s Motion
			</h2>
			<Button>
				<PlusCircle className="h-4 w-4 mr-2"/>
				Create a note
			</Button>
		</div>
	)
}

export default DocumentsPage;