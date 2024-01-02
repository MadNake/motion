import Image from "next/image"

export const Heroes = () => {
	return (
		<div className="flex items-center justify-center max-w-5xl">
			<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[400px]">
				<Image
					src="/documents.png"
					alt="Documents"
					fill
					sizes="(min-width: 768px) 380px, (min-width: 640px) 350px, 300px"
					className="object-contain block dark:hidden"
				/>
				<Image
					src="/documents-dark.png"
					alt="Documents"
					sizes="(min-width: 768px) 380px, (min-width: 640px) 350px, 300px"
					fill
					className="object-contain hidden dark:block"
				/>
			</div>
			<div className="relative w-[380px] h-[400px] hidden md:block">
				<Image
					src="/reading.png"
					alt="Documents"
					sizes="(min-width: 768px) 380px, (min-width: 640px) 350px, 300px"
					fill
					className="object-contain block dark:hidden"
				/>
				<Image
					src="/reading-dark.png"
					alt="Documents"
					sizes="(min-width: 768px) 380px, (min-width: 640px) 350px, 300px"
					fill
					className="object-contain hidden dark:block"
				/>
			</div>
		</div>
	)
}