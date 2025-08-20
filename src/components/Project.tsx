import { Link } from "react-router-dom";
import { HeaderMini } from "./HeaderText";
import type { ProjectProps, ProjectCardProps } from "../types/types";


export const ProjectCard:React.FC<ProjectCardProps> = ({image}) => {
	return (
		<div 
			style={{backgroundImage: `url(${image})`}}
			className='bg-cover bg-no-repeat bg-center w-full h-48 md:h-96 mb-5
					bg-gray-200 shadow-md shadow-black mb-1 rounded-md
					font-bold text-gray-100 dark:text-gray-100
					transform hover:scale-105 hover:shadow-sm transition-all duration-300 ease-in-out
					flex items-center justify-center'/>
	)
}

export const Project:React.FC<ProjectProps> = ({ projectName, link, image, stack, isHero = false }) => {
	const target = !isHero ? "_blank" : ""
	const rel = !isHero ? "noopener noreferrer" : ""
	return (
		<div>
			{!isHero ? (
				<a 	href={link} 
					target={target}
					rel={rel}>
					<ProjectCard image={image}/>
				</a>
			) : (
				<Link 
					to={link}>
					<ProjectCard image={image}/>
				</Link>
			)}
			<div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
				<HeaderMini text={projectName}/>
				<p className="md:text-md text-sm dark:text-gray-100">{stack}</p>
			</div>
		</div>
	)
};