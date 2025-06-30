import React  from 'react'

type HeaderButtonProps = {
	text: string;
}

const HeaderButton = ({text}: HeaderButtonProps) => {
	return (
		<button className='mb-4 bg-gray-900 dark:bg-gray-600
			shadow-sm shadow-gray-300 rounded hover:bg-pink-600
			py-2 px-4 transform transition-all duration-300 hover:scale-110 relative hover-shadow-xl ease-in-out'> 
			{text}</button>
	);
};

export const Header:React.FC = () => {
	return (
			<div className='flex flex-col md:flex-row md:justify-between items-center text-xl mt-[2vh] m-5 p-4 dark:text-white font-bold'>
				<h1 className='text-3xl font-bold py-2 px-4 mb-4'>Timothy Campbell</h1>
				<div className='space-x-4'>
					<HeaderButton text="About"/>
					<HeaderButton text="Projects"/>
					<HeaderButton text="Resume"/>
				</div>
			</div>
	);
};

