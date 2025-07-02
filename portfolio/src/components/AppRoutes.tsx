import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Resume } from "./Resume";
import { AllProjects } from "./AllProjects";

export const AppRoutes:React.FC = () => {
	return (
		<Routes>
			<Route path="/portfolio_page/resume" element={<Resume />}/>
			<Route path="/projects" element={<AllProjects />}/>
			<Route path="/portfolio_page" element={<HomePage />}/>
		</Routes>
	);
};