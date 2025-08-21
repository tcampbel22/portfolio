import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { NavigateButtonProps, MediumButtonProps, ProjectCardProps } from "../types/types";
import { ArrowSquareLeftIcon } from '@phosphor-icons/react'

const LineBreak:React.FC = () => {
	return (
		<div className='px-10 mx-10 md:mx-auto h-[2px] my-10 mb-5 bg-gray-500 dark:bg-white'></div>
	);
};

const NavigateButton:React.FC<NavigateButtonProps> = ({ link, text }) => {
	return (
		<Link to={link} className='text-center min-w-60 md:text-xl dark:text-white px-4 py-7 rounded-sm border-3 dark:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
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

export const MediumButton:React.FC<MediumButtonProps> = ({url, text}) => {
	return (
			<a 
				href={url} 
				target="_blank" 
				rel="noopener noreferrer"
				className="md:text-xl rounded-sm border border-3 dark:text-gray-100 px-8 py-5 my-10 hover:scale-110 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
				>
				{text}
			</a>
	)
}

const ImageCard: React.FC<ProjectCardProps> = ({image, text}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return !isOpen ? (
		<div className="flex flex-col justify-center items-center">
			<p className="my-4 md:text-xl text-sm">{text}</p>
			<img 
				src={image} 
				onClick={() => setIsOpen(true)}
				className="w-32 h-24 md:w-full md:h-96 mb-1 object-cover cursor-pointer rounded-sm transform hover:scale-105 transition-all duration-200 ease-in-out"/>
		</div>
	) : (
		<div
			className='fixed inset-0 bg-gray-100/70 dark:bg-gray-900/70 flex flex-col items-center justify-center '
			onClick={() => setIsOpen(false)}
			>
				<img 
				src={image} 
				className="px-5 md:max-w-7xl max-h-200 cursor-pointer rounded-sm"/>
			</div>
	)

}


export { LineBreak, NavigateButton, BackButton, ImageCard };