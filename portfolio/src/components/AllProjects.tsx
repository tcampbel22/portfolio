import React from 'react'
import { Footer } from './Footer';
import { Project } from './Project';

export const AllProjects:React.FC = ()  => {
	return (
		<div className='pt-10 pb-10'>
			<h1 className='dark:text-white text-center font-bold text-3xl md:text-5xl mb-5'>Projects</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 m-5 mx-10'>
				{/* <Project projectName="Meal planning app" link=""/> */}
				<Project projectName="Shell interpreter" link="https://github.com/tcampbel22/custom_shell_interpreter" image="/shell.gif"/>
				<Project projectName="2.5D raycasting game" link="https://github.com/tcampbel22/cub3d" image="/duck.gif"/>
				<Project projectName="Arcade-style collectathon" link="https://github.com/tcampbel22/arcade_style_collectathon_game" image="/dino.gif"/>
				<Project projectName="Card shuffler app" link="https://tarot-tim-campbell.onrender.com" image="/cards.gif"/>
				<Project projectName="HTTP 1.1 server" link="https://github.com/tcampbel22/https://github.com/tcampbel22/HTTP_1.1_server" image="/server.gif"/>
				<Project projectName="Custom printf" link="https://github.com/tcampbel22/custom_printf" image="/printf.png"/>
				<Project projectName="Custom C library" link="https://github.com/tcampbel22/custom_C_library" image='/c.png'/>
				<Project projectName="Pong web app" link="https://github.com/tcampbel22/transcendence" image='/Pong.png'/>
				<Project projectName="Dining philosophers" link="https://github.com/tcampbel22/dining_philosophers" image='/philo.png'/>
				<Project projectName="Turk sorting algorithm" link="https://github.com/tcampbel22/turk_sorting_algorithm" image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Racknitz_-_The_Turk_3.jpg/1024px-Racknitz_-_The_Turk_3.jpg"/>
				<Project projectName="Exercise tracker dashboard" link="https://github.com/tcampbel22/Exercise-Tracker-Dashboard" image="/dash.png"/>
			</div>
			<Footer/>
		</div>
	);
};

