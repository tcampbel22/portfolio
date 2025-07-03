import React, { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import type { DarkProps, HeaderButtonProps } from '../types/types';
import { HeaderMini, HeaderTitle } from './HeaderText';
import { LinkedinLogo, GithubLogo, ReadCvLogo } from "@phosphor-icons/react";

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
				 <ReadCvLogo size={64} alt="Read my CV" text="Read my CV"/>
					
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
					<HeaderButton link="https://github.com/tcampbel22" icon={<GithubLogo size={64} text="Github" alt="Github" color={isDark ? '#f6f5f4' : '#000000'}/>}/>
					<HeaderButton link="https://www.linkedin.com/in/tim-campbell-49b40880" icon={<LinkedinLogo size={64} text="LinkedIn" alt="LinkedIn" color={isDark ? '#f6f5f4' : '#000000'}/>}/>
					<HeaderButton link="/resume" icon={<ReadCvLogo size={64} alt="Read my CV" text="Read my CV" color={isDark ? '#f6f5f4' : '#000000'}/>} internal={true}/>
				</div>
			</div>

	);
};
