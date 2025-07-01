import React from 'react'
import { Link } from 'react-router-dom';

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
				bg-gray-200 shadow-md mb-1 text-xl md:text-4xl
				font-bold text-gray-900 dark:text-gray-100
				transform hover:scale-105 transition-all duration-300 ease-in-out
				flex items-center justify-center'
				>
				{projectName}
		</a>
	);
};

export const Projects:React.FC = ()  => {
	return (
		<div className='mt-10 mb-10 pb-10'>
			<h1 className='dark:text-white text-center font-bold text-3xl md:text-5xl mb-5'>Projects</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 m-5 '>
				<Project projectName="Shell interpreter" link="https://github.com/tcampbel22/42_hive_minishell" image="/shell.gif"/>
				<Project projectName="2.5D raycasting game" link="https://github.com/tcampbel22/cub3d" image="/duck.gif"/>
				{/* <Project projectName="Custom C library" link="https://github.com/tcampbel22/42_hive_libft"/> */}
				{/* <Project projectName="Dining philosophers" link="https://github.com/tcampbel22/42_philosophers"/> */}
				<Project projectName="2D Platformer" link="https://github.com/tcampbel22/42_hive_so_long" image="/dino.gif"/>
				{/* <Project projectName="Sorting Algorithm" link="https://github.com/tcampbel22/42_hive_push_swap"/> */}
				{/* <Project projectName="Pong web app" link="https://github.com/tcampbel22/transcendence"/> */}
				<Project projectName="HTTP 1.1 server" link="https://github.com/tcampbel22/42_webserv" image="server.gif"/>
				{/* <Project projectName="Custom printf" link="https://github.com/tcampbel22/42_hive_ft_printf"/> */}
				{/* <Project projectName="Meal planning app" link=""/> */}
				{/* <Project projectName="Exercise tracker app" link="https://github.com/tcampbel22/Exercise-Tracker-Dashboard"/> */}
				{/* <Project projectName="Card shuffler app" link="https://tarot-tim-campbell.onrender.com"/> */}
			</div>
			<div className='flex items-center justify-center'>
				<Link to="/projects" className='text-center dark:text-white p-4 bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>See more projects</Link>
			</div>
		</div>
	);
};