import React from "react";
import { Link } from "react-router-dom";
import type { NavigateButtonProps } from "../types/types";

const LineBreak:React.FC = () => {
	return (
		<div className='px-10 mx-10 md:mx-auto h-[2px] my-10 mb-5 bg-gray-500 dark:bg-white'></div>
	);
};

const NavigateButton:React.FC<NavigateButtonProps> = ({ link, text }) => {
	return (
		<Link to={link} className='text-center dark:text-white p-7 mt-20 border-2 dark:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
			{text}
		</Link>
	);
}

export { LineBreak, NavigateButton };