import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";

type HeaderButtonProps = {
	text: string;
	link: string;
	image?: string;
	internal?: boolean;
}

const HeaderButton = ({ text, link, image, internal }: HeaderButtonProps) => {
	return !internal ? (
			<a  href={link} 
				title={text}
				style={{ backgroundImage: image ? `url(${image})` : undefined }} 
				className={`inline-block mb-4 w-16 h-16 bg-cover bg-white outline-black dark:outline-none dark:bg-gray-950 rounded-md 
				 transform transition-all duration-300 hover:scale-110 relative hover-shadow-sm ease-in-out`}
				>
				<span className="sr-only">{text}</span>
			</a> ) 
			: ( <Link to={link}>
				</Link>
	);
};

export const Header:React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setDarkMode(mediaQuery.matches);
		const handleLightMode = (event: MediaQueryListEvent) => {
			setDarkMode(event.matches);
		};
		mediaQuery.addEventListener('change', handleLightMode);
		return () => {
            mediaQuery.removeEventListener('change', handleLightMode);
        };
	}, []);

	return (
			<div className='flex flex-col md:flex-row md:justify-between items-center text-xl mt-[4vh] m-3 p-4 dark:text-white font-bold'>
				<div>
					<h1 className='text-5xl font-bold px-4 mb-2 text-center md:text-left'>Timothy Campbell</h1>
					<h2 className='text-1xl font-bold px-4 mb-4 m-2 text-center md:text-left'>tcampbel22@gmail.com</h2>
				</div>

				<div className='space-x-4'>
					<HeaderButton text="Github" link="https://github.com/tcampbel22" image={!darkMode ? '/portfolio_page/github-mark.png' : '/portfolio_page/github-mark-white.png'}/>
					<HeaderButton text="LinkedIn" link="https://www.linkedin.com/in/tim-campbell-49b40880" image={!darkMode ? '/portfolio_page/LI-Blue.png' : '/portfolio_page/LI-White.png'}/>
					<HeaderButton text="Resume" link="/resume" image={!darkMode ? '/portfolio_page/cv-black.png' : '/portfolio_page/cv-colour.png'} internal={true}/>
				</div>
			</div>

	);
};

