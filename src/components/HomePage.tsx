import { Header } from "./Header";
import { About } from "./About"
import { Projects } from "./Projects"
import { Footer } from "./Footer"
import { Banner } from "./Banner";
import { LineBreak } from "./Utils";
import { Contact } from "./Contact";
import { useEffect, useState } from "react";

export const HomePage:React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);
	
		useEffect(() => {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			setDarkMode(mediaQuery.matches);
			const handleLightMode = (event: MediaQueryListEvent) => {
				setDarkMode(event.matches);
			};
			mediaQuery.addEventListener('change', handleLightMode);
			return () => {
				mediaQuery.removeEventListener('change', handleLightMode);
			};
		}, []);
	
	return (
		<div className="md:max-w-screen-xl mx-auto">
			<Header isDark={darkMode}/>
			<LineBreak />
			<About/>
			<LineBreak />
			<Projects/>
			<LineBreak />
			<Banner />
			<LineBreak />
			<Contact isDark={darkMode}/>
			<Footer/>
		</div>
	);
};