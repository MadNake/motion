import Image from "next/image";

export const Logo = () => {
	return (
		<div className="md:flex items-center gap-x-2 hidden">
			<Image
				src="/logo.svg"
				alt="logo"
				width={40}
				height={40}
				className="block dark:hidden"
			/>
			<Image
				src="/logo-dark.svg"
				alt="logo"
				width={40}
				height={40}
				className="hidden dark:block"
			/>
			<h1 className="font-semibold">Motion</h1>
		</div>
	);
};
