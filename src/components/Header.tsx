import React  from 'react'
import { Link } from "react-router-dom";
import type { DarkProps, HeaderButtonProps } from '../types/types';
import { HeaderMini, HeaderTitle } from './HeaderText';
import { LinkedinLogoIcon, GithubLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react";

const HeaderButton:React.FC<HeaderButtonProps> = ({ link, internal, icon }) => {
	return !internal ? (
			<a  href={link} 
				target="_blank" 
				rel="noopener noreferrer"
				className={`transform transition-all duration-300 hover:scale-110 relative hover-shadow-sm ease-in-out`}>
				{icon}
			</a> ) 
			: ( <Link 
				to={link}
				className={`transform transition-all duration-300 hover:scale-110 relative hover-shadow-sm ease-in-out`}>
				 {icon}
				</Link>
	);
};

export const Header:React.FC<DarkProps> = ({ isDark }) => {
	return (
			<div className='flex flex-col md:flex-row md:justify-between items-center md:items-start pt-[5vh] w-full mx-auto dark:text-white font-bold'>
				<div className='flex flex-col'>
					<Link to={'/'}>
						<HeaderTitle text="Timothy Campbell"/>
					</Link>
					<HeaderMini text="tcampbel22@gmail.com"/>
				</div>
				<div className='flex flex-row space-x-2 mt-4 md:mt-0'>
					<HeaderButton link="https://github.com/tcampbel22" icon={<GithubLogoIcon size={64} alt="Github" color={isDark ? '#f6f5f4' : '#000000'}/>}/>
					<HeaderButton link="https://www.linkedin.com/in/tim-campbell-49b40880" icon={<LinkedinLogoIcon size={64} alt="LinkedIn-requires log-in" color={isDark ? '#f6f5f4' : '#000000'}/>}/>
					<HeaderButton link="/resume" icon={<ReadCvLogoIcon size={64} alt="Read my CV" color={isDark ? '#f6f5f4' : '#000000'}/>} internal={false}/>
				</div>
			</div>

	);
};
