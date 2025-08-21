import { Header } from "./Header";
import { About } from "./About"
import { Projects } from "./Projects"
import { Footer } from "./Footer"
import { Banner } from "./Banner";
import { LineBreak } from "./Utils";
import { Contact } from "./Contact";
import type { DarkProps } from "../types/types";

export const HomePage:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="md:max-w-screen-xl h-full mx-auto">
			<Header isDark={isDark}/>
			<LineBreak />
			<About/>
			<LineBreak />
			<Projects/>
			<LineBreak />
			<Banner />
			<LineBreak />
			<Contact isDark={isDark}/>
			<Footer/>
		</div>
	);
};