import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/Heroes";
import { Footer } from "./_components/Footer";


const MarketingPage = () => {
	return (
		<div className="flex flex-col">
			<div className="px-6 flex-1 gap-y-8 flex flex-col pb-10 w-full justify-center md:justify-start items-center  text-center">
				<Heading />
				<Heroes />
			</div>
			<Footer />
		</div>
	)
}

export default MarketingPage;