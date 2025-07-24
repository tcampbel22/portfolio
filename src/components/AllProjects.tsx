import React from 'react'
import { Footer } from './Footer';
import { Project } from './Project';
import { LineBreak, NavigateButton } from './Utils';
import { ProjectList } from '../data/projectList';
import { HeaderCenterLarge } from './HeaderText';
import { Link } from 'react-router-dom';


export const AllProjects:React.FC = ()  => {
	return (
		<div className='py-10 md:mx-10'>
			<div className='flex flex-col md:flex-row items-center md:justify-between '>
				<Link to="/" title='Go to home page'>
					<HeaderCenterLarge text="Projects"/>
				</Link>
			</div>
			<p className="mx-5 md:mx-auto my-10 dark:text-gray-100 text-center md:text-left text-md md:text-lg">
				Here you'll find all my projects, each one links to their respective Github page
			</p>
			<LineBreak />
			<div className='flex justify-center items-center mt-15 mb-10'>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:mt-20 mx-5 p-5 md:p-0 md:mx-auto'>
				{ProjectList.map(p => { 
					return <Project key={p.name} projectName={p.name} stack={p.stack} link={p.link} image={p.image}/>
				})}
			</div>
			<div className='flex justify-center items-center mt-15'>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<Footer/>
		</div>
	);
};

