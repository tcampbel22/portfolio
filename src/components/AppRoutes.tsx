import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Resume } from "./Resume";
import { AllProjects } from "./AllProjects";
import { PongPage } from "./PongPage";
import type { DarkProps } from "../types/types";
import { MinishellPage } from "./MinishellPage";
import { NotFound } from "./NotFound";

export const AppRoutes:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<Routes>
			<Route path="/resume" element={<Resume isDark={isDark}/>}/>
			<Route path="/projects" element={<AllProjects isDark={isDark}/>}/>
			<Route path="/pong" element={<PongPage isDark={isDark}/>}/>
			<Route path="/minishell" element={<MinishellPage isDark={isDark}/>}/>
			<Route path="/" element={<HomePage isDark={isDark}/>}/>
			<Route path="*" element={<NotFound isDark={isDark}/>} />
		</Routes>
	);
};