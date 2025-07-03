import React from 'react'
import { Project } from './Project';
import { NavigateButton } from './Utils';
import { ProjectList } from '../data/projectList';

export const Projects:React.FC = ()  => {
	return (
		<div className='py-8'>
			<div className='grid grid-cols-1 mx-10 md:mx-0 md:justify-items-around md:grid-cols-2 gap-10'>
				{ProjectList.map((p, idx) => 
					idx < 4 ? (
						<Project key={p.name} projectName={p.name} stack={p.stack} link={p.link} image={p.image}/>
					) : null
				)}
			</div>
			<div className='flex items-center justify-center mb-8'>
				<NavigateButton link='/projects' text='See more projects'/>
			</div>
		</div>
	);
};