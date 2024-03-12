import { useEffect, useState } from "react";

export const useScroll = (scrollPos = 10) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY > scrollPos ? true : false;
			setScrolled(scroll);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPos]);

	return scrolled;
};
