import React from "react";
import { BackButton } from "./Utils";
import { Footer } from "./Footer";
import type { DarkProps } from "../types/types";

export const Resume:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="md:max-w-screen-2xl mx-auto">
			<div className='flex items-center justify-center py-8'>
				<BackButton link='/' text='Back to homepage' isDark={isDark}/>
			</div>
			<div className="flex flex-col justify-center items center py-[10vh] px-[10vw]">
				<img src="/resume.png" alt="" className="border-1 shadow-md shadow-black"/>
			</div>
			<div className='flex items-center justify-center mb-8'>
				<BackButton link='/' text='Back to homepage' isDark={isDark}/>
			</div>
			<Footer/>
		</div>
	);
};