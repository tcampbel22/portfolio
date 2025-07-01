import { Header } from "./Header";
import { About } from "./About"
import { Projects } from "./Projects"
import { Footer } from "./Footer"
import { Banner } from "./Banner";

export const HomePage:React.FC = () => {
	return (
		<div className=" md:max-w-screen-xl mx-auto font-mono">
			<Header/>
			<div className='px-10 mx-10 h-[2px] my-10 mb-5 bg-black dark:bg-white'></div>
			<About/>
			<div className='px-10 mx-10 h-[2px] my-10 mb-5 bg-black dark:bg-white'></div>
			<Projects/>
			<div className='px-10 mx-10 h-[2px] my-10 mb-5 bg-black dark:bg-white'></div>
			<Banner />
			<Footer/>
		</div>
	);
};