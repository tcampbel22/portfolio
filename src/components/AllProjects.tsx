import React from 'react'
import { Footer } from './Footer';
import { Project } from './Project';
import { BackButton, LineBreak  } from './Utils';
import { ProjectList } from '../data/projectList';
import { HeaderCenterLarge } from './HeaderText';
import type { DarkProps } from '../types/types';


export const AllProjects:React.FC<DarkProps> = ({ isDark })  => {
	return (
		<div className='py-10 md:mx-20'>
			<div className='relative flex flex-col md:flex-row items-center justify-center'>
				<HeaderCenterLarge text="Projects"/>
				<div className='flex md:absolute left-0 mt-5 md:mt-0'>
					<BackButton link="/" text="Go to home page" isDark={isDark}/>
				</div>
			</div>
			<p className="mx-5 md:mx-auto my-10 dark:text-gray-100 text-center text-md md:text-lg">
				Here you'll find all my projects, each one links to their respective Github page
			</p>
			<LineBreak />
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:mt-20 mx-5 p-5 md:p-0 md:mx-auto'>
				{ProjectList.map((p, idx)=> { 
					if (idx < 2)
						return <Project key={p.name} projectName={p.name} stack={p.stack} link={p.link} image={p.image} isHero={true}/>
					return <Project key={p.name} projectName={p.name} stack={p.stack} link={p.link} image={p.image}/>
				})}
			</div>
			<div className='flex justify-center  left-0 mt-15'>
					<BackButton link="/" text="Go to home page" isDark={isDark}/>
				</div>
			<Footer/>
		</div>
	);
};

