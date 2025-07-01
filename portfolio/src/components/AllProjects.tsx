import React from 'react'
import { Footer } from './Footer';

type ProjectProps = {
	projectName: string;
	link: string;
	image?: string;
}
const Project = ({ projectName, link, image }: ProjectProps) => {
	return (
		<a 	href={link} 
			target="_blank"
            rel="noopener noreferrer" 
			style={{backgroundImage: `url(${image})`}}
			className='bg-cover bg-center w-full h-48 md:h-96
				bg-gray-700 shadow-md mb-1 text-xl md:text-4xl
				font-bold text-gray-900 dark:text-gray-100
				transform hover:scale-105 transition-all duration-300 ease-in-out
				flex items-center justify-center'
				>
				{projectName}
		</a>
	);
};

export const AllProjects:React.FC = ()  => {
	return (
		<div className='mt-10 mb-10 pb-10'>
			<h1 className='dark:text-white text-center font-bold text-3xl md:text-5xl mb-5'>Projects</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 m-5 mx-10'>
				<Project projectName="Shell interpreter" link="https://github.com/tcampbel22/42_hive_minishell" image="/shell.gif"/>
				<Project projectName="2.5D raycasting game" link="https://github.com/tcampbel22/cub3d" image="/duck.gif"/>
				<Project projectName="2D Platformer" link="https://github.com/tcampbel22/42_hive_so_long" image="/dino.gif"/>
				<Project projectName="HTTP 1.1 server" link="https://github.com/tcampbel22/42_webserv" image="server.gif"/>
				<Project projectName="Custom C library" link="https://github.com/tcampbel22/42_hive_libft"/>
				<Project projectName="Dining philosophers" link="https://github.com/tcampbel22/42_philosophers"/>
				<Project projectName="Sorting Algorithm" link="https://github.com/tcampbel22/42_hive_push_swap"/>
				<Project projectName="Pong web app" link="https://github.com/tcampbel22/transcendence"/>
				<Project projectName="Custom printf" link="https://github.com/tcampbel22/42_hive_ft_printf"/>
				<Project projectName="Meal planning app" link=""/>
				<Project projectName="Exercise tracker app" link="https://github.com/tcampbel22/Exercise-Tracker-Dashboard"/>
				<Project projectName="Card shuffler app" link="https://tarot-tim-campbell.onrender.com"/>
			</div>
			<Footer/>
		</div>
	);
};