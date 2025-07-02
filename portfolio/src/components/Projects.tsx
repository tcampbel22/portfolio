import React from 'react'
import { Link } from 'react-router-dom';
import { Project } from './Project';

export const Projects:React.FC = ()  => {
	return (
		<div className='mt-10 mb-10 pb-10'>
			<h1 className='dark:text-white text-center font-bold text-3xl md:text-5xl mb-5'>Projects</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 m-5 '>
				<Project projectName="Custom shell interpreter" link="https://github.com/tcampbel22/custom_shell_interpreter" image="/portfolio_page/shell.gif"/>
				<Project projectName="2.5D raycasting game" link="https://github.com/tcampbel22/cub3d" image="/portfolio_page/duck.gif"/>
				<Project projectName="Arcade-style collectathon" link="https://github.com/tcampbel22/arcade_style_collectathon_game" image="/portfolio_page/dino.gif"/>
				<Project projectName="HTTP 1.1 server" link="https://github.com/tcampbel22/HTTP_1.1_server" image="/portfolio_page/server.gif"/>
			</div>
			<div className='flex items-center justify-center'>
				<Link to="/projects" className='text-center dark:text-white p-4 border-2 dark:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>See more projects</Link>
			</div>
		</div>
	);
};