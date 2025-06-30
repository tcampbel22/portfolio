import React from 'react'

type ProjectProps = {
	projectName: string;
	link: string;
}
const Project = ({ projectName, link }: ProjectProps) => {
	return (
		<a 	href={link} 
			target="_blank"
            rel="noopener noreferrer" 
			className='flex sm:flex-col justify-center items-center col-span-1 row-span-1 w-40 h-40 bg-gray-600 shadow-md rounded-lg m-4 mb-1
				font-bold text-gray-900 dark:text-gray-100 shadow-sm shadow-gray-300
				transform hover:scale-110 hover:bg-pink-600 transition-all duration-300 ease-in-out relative hover:shadow-md'
				>
				{projectName}
		</a>
	);
};

export const Projects:React.FC = ()  => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='dark:text-white font-bold text-3xl'>Projects</h1>
			<div className='grid grid-cols-4 grid-rows-4 gap-4 p-5 items-center justify-center'>
				<Project projectName="Shell interpreter" link="https://github.com/tcampbel22/42_hive_minishell"/>
				<Project projectName="2.5d raycasting game" link="https://github.com/tcampbel22/cub3d"/>
				<Project projectName="Custom C library" link="https://github.com/tcampbel22/42_hive_libft"/>
				<Project projectName="Dining philosophers" link="https://github.com/tcampbel22/42_philosophers"/>
				<Project projectName="2D Platformer" link="https://github.com/tcampbel22/42_hive_so_long"/>
				<Project projectName="Sorting Algorithm" link="https://github.com/tcampbel22/42_hive_push_swap"/>
				<Project projectName="Pong web app" link="https://github.com/tcampbel22/transcendence"/>
				<Project projectName="HTTP 1.1 server" link="https://github.com/tcampbel22/42_webserv"/>
				<Project projectName="Custom printf" link="https://github.com/tcampbel22/42_hive_ft_printf"/>
				<Project projectName="Meal planning app" link=""/>
				<Project projectName="Exercise tracker app" link="https://github.com/tcampbel22/Exercise-Tracker-Dashboard"/>
				<Project projectName="Card shuffler app" link="https://tarot-tim-campbell.onrender.com"/>
			</div>
		</div>
	);
};