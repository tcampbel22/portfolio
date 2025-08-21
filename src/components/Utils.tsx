import React from "react";
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
		<Link to={link} className='text-center md:text-xl dark:text-white px-9 py-7 rounded-sm border-3 dark:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
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
		<button className="md:text-xl rounded-sm border border-3 dark:text-gray-100 px-8 py-5 my-10 hover:scale-110 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out">
			<a href={url} target="_blank" rel="noopener noreferrer">
			{text}
			</a>
		</button>
	)
}

const ImageCard: React.FC<ProjectCardProps> = ({image, text}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<p className="my-2">{text}</p>
		<div 
			style={{backgroundImage: `url(${image})`}}
			className='bg-cover bg-no-repeat bg-center w-full h-48 md:h-96
						shadow-black mb-1 rounded-sm
					transform md:hover:scale-150 md:hover:bg-contain transition-all duration-400 ease-in-out
					'/>
		</div>
	)

}

export { LineBreak, NavigateButton, BackButton, ImageCard };