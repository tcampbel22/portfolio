import React from "react";
import { Link } from "react-router-dom";
import type { NavigateButtonProps } from "../types/types";
import { ArrowSquareLeftIcon } from '@phosphor-icons/react'

const LineBreak:React.FC = () => {
	return (
		<div className='px-10 mx-10 md:mx-auto h-[2px] my-10 mb-5 bg-gray-500 dark:bg-white'></div>
	);
};

const NavigateButton:React.FC<NavigateButtonProps> = ({ link, text }) => {
	return (
		<Link to={link} className='text-center dark:text-white p-7 rounded-md border-2 dark:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
			{text}
		</Link>
	);
}

const BackButton: React.FC<NavigateButtonProps> = ({ link, text, isDark }) => {
	return (
		<Link 
			to={link} 
			title={text}
			className={`transform hover:scale-110 transition-all duration-300 ease-in-out`}>
			<ArrowSquareLeftIcon size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
		</Link>	)
}

export { LineBreak, NavigateButton, BackButton };