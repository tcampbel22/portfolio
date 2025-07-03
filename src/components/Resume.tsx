import React from "react";
import { NavigateButton } from "./Utils";
import { Footer } from "./Footer";

export const Resume:React.FC = () => {
	return (
		<div>
			<div className='flex items-center justify-center mb-8'>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<div className="flex flex-col justify-center items center py-[10vh] px-[10vw]">
				<img src="/resume.png" alt="" className="border-1 shadow-md shadow-black"/>
			</div>
			<div className='flex items-center justify-center mb-8'>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<Footer/>
		</div>
	);
};