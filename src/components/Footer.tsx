import React from "react";
import { LineBreak } from "./Utils";

export const Footer:React.FC = () => {
	return (
		<div className="mt-20">
			<LineBreak />
			<div className="flex flex-col dark:text-white text-sm font-bold">
			<h1 className="text-center mb-2">Built by me with</h1>
				<div className="flex flex-row justify-center items-center mb-4 space-x-2">
					<img src="/react.svg" alt="React" title="React"></img>
					<img src="/tailwindcss.png" alt="TailwindCSS" title="TailwindCSS"></img>
					<img src="/ts-logo-128.png" alt="Typescript" title="Typescript"></img>
				</div>
			</div>
		</div>
	);
};