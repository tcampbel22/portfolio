import React from 'react'
import timImg from '../assets/tim.webp'
import { HeaderSmall, HeaderTitle } from './HeaderText';

export const About:React.FC = () => {
	return (
		<div className=' p-2 mx-auto py-8'>
			<div className='grid grid-cols-3 justify-items-center'>
				<img src={timImg} className='col-span-3 md:row-span-3 md:col-span-1 w-60 w-60 md:w-90 md:h-90 rounded-lg'/>
				<p className='col-span-3 md:pt-0 py-6 px-2 md:col-span-2 dark:text-white md:text-left text-md md:text-lg'>
					<HeaderSmall text="About me"/>
					Software developer with hands-on experience in full-stack development 
					and a strong focus on backend engineering. Before transitioning into tech, 
					I spent over 10 years in hospitality and food-tech operations—leading launches, 
					managing teams, and driving projects in fast-paced startup environments.
					Now, I bring that same energy and strategic mindset to software development. I'm passionate about 
					backend architecture, API design, and building clean, well-tested applications. </p>
					<p className='col-span-3 md:col-span-2 px-2 dark:text-white md:text-left text-md md:text-lg '>My current toolbox 
					includes C, C++, Python, TypeScript, and JavaScript, along with experience in frameworks like React, Fastify, and Flask.
					With a background in managing people and processes, I’m a strong communicator, problem-solver, and collaborator. 
		           Check out some of my projects below!</p>

			</div>
		</div>
	);
};