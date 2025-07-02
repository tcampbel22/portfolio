import React from "react";

export const Footer:React.FC = () => {
	return (
		<div className="flex flex-col dark:text-white text-sm font-bold mt-20">
			<h1 className="text-center mb-2">Built by me 2025</h1>
			<div className="flex flex-row justify-center items-center mb-4 space-x-2">
				<img src="/portfolio_page/react.svg" title="React"></img>
				<img src="/portfolio_page/tailwindcss.png" title="TailwindCSS"></img>
				<img src="/portfolio_page/ts-logo-128.png" title="Typescript"></img>
			</div>
			<a href="https://www.flaticon.com/free-icons/curriculum-vitae" title="cv icon" className="text-center">CV icon created by kerismaker</a>
		</div>
	);
};