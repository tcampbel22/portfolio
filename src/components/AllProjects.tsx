import React from 'react'
import { Footer } from './Footer';
import { Project } from './Project';
import { NavigateButton } from './Utils';
import { ProjectList } from '../data/projectList';


export const AllProjects:React.FC = ()  => {
	return (
		<div className='pt-10 pb-10'>
			<div className='flex flex-col items-center justify-center pb-10'>
				<h1 className='text-center font-bold text-3xl dark:text-gray-100'>Projects</h1>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 m-5 mx-10'>
				{ProjectList.map(p => { 
					return <Project key={p.name} projectName={p.name} stack={p.stack} link={p.link} image={p.image}/>
				})}
			</div>
			<div className='flex justify-center items-center'>
				<NavigateButton link='/' text='Back to homepage'/>
			</div>
			<Footer/>
		</div>
	);
};

