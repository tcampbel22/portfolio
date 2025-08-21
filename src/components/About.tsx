import React from 'react'
import timImg from '../assets/tim.webp'

export const About:React.FC = () => {
	return (
		<div className='w-full mx-auto py-8 dark:text-gray-100'>
			<div className='grid grid-cols-3 justify-items-center md:justify-items-start'>
				<img src={timImg} className='md:mt-1 col-span-3 md:row-span-3 md:col-span-1 w-60 h-60 md:w-92 md:h-92 rounded-lg'/>
				<h2 className='pt-6 md:pt-0 col-span-3 md:col-span-1 row-span-1 md:text-3xl font-bold pb-2'>About Me</h2>
				<p className='col-span-3 md:pt-0 px-2 lg:px-0 py-6 md:col-span-2  text-center md:text-left text-md md:text-lg'>
					Software developer with hands-on experience in full-stack development 
					and a strong focus on backend engineering. Before transitioning into tech, 
					I spent over 10 years in hospitality and food-tech operations leading restaurant launches, 
					managing teams, and driving projects in startups, small businesses and larger enterprises.
					Now, I bring that same energy and strategic mindset to software development, with a background 
					in managing people and processes, I’m a strong communicator, problem-solver, and collaborator. 
					<br/>
					<br/>
					I'm currently building projects with Python, Typescript and Javascript, 
					as well as using frameworks and libraries such as React, Express and FastAPI.
		            <br/>
		            <br/>
					You can find more of my projects by following the links below!
				</p>
			</div>
		</div>
	);
};