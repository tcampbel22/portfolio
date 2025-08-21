import React from "react";
import { Footer } from "./Footer";
import { BackButton } from "./Utils";
import type { DarkProps } from "../types/types";

export const Resume:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="md:px-100">
			<div className="flex flex-col items-center gap-y-6 pt-10">
				<BackButton link="/" isDark={isDark}/>
				<div className="md:w-5xl w-sm md:h-360 h-120 p-4">
					<iframe src="/files/cv.pdf" width="100%" height="100%"></iframe>
				</div>
				<BackButton link="/" isDark={isDark}/>
			</div>
			<Footer/>
		</div>
	);
};
