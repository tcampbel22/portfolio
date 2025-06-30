import React from "react";
import { Header } from "./Header";
import { About } from "./About"
import { Projects } from "./Projects"
import { Footer } from "./Footer"

export const AppRoutes:React.FC = () => {
	return (
		<div>
			<Header/>
			<About/>
			<Projects/>
			<Footer/>
		</div>
	);
};