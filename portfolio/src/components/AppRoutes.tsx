import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Resume } from "./Resume";
import { AllProjects } from "./AllProjects";



export const AppRoutes:React.FC = () => {
	return (
		<Routes>
			<Route path="/resume" element={<Resume />}/>
			<Route path="/projects" element={<AllProjects />}/>
			<Route path="" element={<HomePage />}/>
		</Routes>
	);
};