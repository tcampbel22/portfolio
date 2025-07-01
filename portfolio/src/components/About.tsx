import React from 'react'
import timImg from '../assets/tim.webp'

export const About:React.FC = () => {
	return (
		<div className='flex flex-col items-center max-w-5xl p-2 mx-auto'>
			
			<h1 className='dark:text-white font-bold text-3xl mb-4'>About</h1>
			<img src={timImg} className='max-w-80 max-h-80 m-3 rounded-full'/>
			<p className='dark:text-white md:text-left text-xl text-center px-4 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, 
				nisl erat dictum augue, nec dictum eros enim nec urna. Mauris euismod, sapien nec laoreet dictum, enim erat dictum augue, nec dictum eros enim nec urna.
				Pellentesque euismod, nisi eu consectetur cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, 
				nisl erat dictum augue, nec dictum eros enim nec urna. Mauris euismod, sapien nec laoreet dictum, enim erat dictum augue, nec dictum eros enim nec urna.
				Pellentesque euismod, nisi eu consectetur cursus.</p>
		</div>
	);
};