import React from 'react'
import timImg from '../assets/tim.webp'

export const About:React.FC = () => {
	return (
		<div className='flex flex-col items-center max-w-6xl p-2 mx-auto'>
			
			<h1 className='dark:text-white font-bold text-3xl md:text-5xl mb-4'>About</h1>
			<img src={timImg} className='max-w-80 max-h-80 m-3 rounded-full'/>
			<p className='dark:text-white md:text-left text-xl text-center px-4 mt-5 w-full'>
				I'm a software developer with hands-on experience in full-stack development 
				and a strong focus on backend engineering. Before transitioning into tech, 
				I spent over 10 years in hospitality and food-tech operations—leading launches, 
				managing teams, and driving complex projects in fast-paced startup environments.
				Now, I bring that same energy and strategic mindset to software development. I'm passionate about 
				backend architecture, API design, and building clean, well-tested applications. </p>
				<p className='dark:text-white md:text-left text-xl text-center px-4 mt-5 w-full'>My current toolbox 
				includes C, C++, Python, TypeScript, and JavaScript, along with experience in frameworks like React, Fastify, and Flask.
				With a background in managing people and processes, I’m a strong communicator, problem-solver, and collaborator. 
				I enjoy challenging myself with new problems—whether it’s learning a new tool, debugging a tricky bug, or building something from scratch. 
				It’s the process of figuring things out that keeps me motivated.</p>
		</div>
	);
};